package pl.gnb.plugins.servlet;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.*;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import com.atlassian.plugin.spring.scanner.annotation.imports.ComponentImport;
import javax.inject.Inject;

import com.atlassian.soy.renderer.SoyTemplateRenderer;
import com.atlassian.bitbucket.project.Project;
import com.atlassian.bitbucket.project.ProjectService;
import com.atlassian.sal.api.pluginsettings.PluginSettings;
import com.atlassian.sal.api.pluginsettings.PluginSettingsFactory;

public class ProjectServlet extends HttpServlet {
	private static final String PLUGIN_STORAGE_KEY = "pl.gnb.plugins.servlet.linking-with-issue-tracker";
	private static final Logger log = LoggerFactory.getLogger(ProjectServlet.class);
	@ComponentImport
	private final ProjectService projectService;
	@ComponentImport
	private final SoyTemplateRenderer soyTemplateRenderer;
	@ComponentImport
    private final PluginSettingsFactory pluginSettingsFactory;
	
	@Inject
    public ProjectServlet(ProjectService projectService, SoyTemplateRenderer soyTemplateRenderer, PluginSettingsFactory pluginSettingsFactory) {
        this.projectService = projectService;
        this.soyTemplateRenderer = soyTemplateRenderer;
        this.pluginSettingsFactory = pluginSettingsFactory;
    }

	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		try {
			resp.setContentType("text/html;charset=UTF-8");
			String pathInfo = req.getPathInfo();
			String[] components = pathInfo.split("/");
			Project project = projectService.getByKey(components[1]);
			
			PluginSettings pluginSettings = pluginSettingsFactory.createGlobalSettings();
			String linkUrl = (String) pluginSettings.get(PLUGIN_STORAGE_KEY + "." + project.getId() + ".link_url");
			String linkKey = (String) pluginSettings.get(PLUGIN_STORAGE_KEY + "." + project.getId() + ".link_key");
			
			final Map<String, Object> context = new HashMap<String, Object>();
			context.put("project", project);
			context.put("linkUrl", linkUrl == null ? "" : linkUrl);
			context.put("linkKey", linkKey == null ? "" : linkKey);

			soyTemplateRenderer.render(resp.getWriter(),
					"pl.gnb.plugins.linking-with-issue-tracker:template-soy",
					"pl.gnb.plugins.project", context);
		} catch (Exception e) {
			log.error("Exception in ProjectServlet.doGet: " + e.getMessage(), e);
		}
	}
	
	@Override
    protected void doPost(HttpServletRequest req, HttpServletResponse response) throws ServletException, IOException {
        PluginSettings pluginSettings = pluginSettingsFactory.createGlobalSettings();
        String projectId = req.getParameter("project_id");
        pluginSettings.put(PLUGIN_STORAGE_KEY + "." + projectId + ".link_url", req.getParameter("link_url"));
        pluginSettings.put(PLUGIN_STORAGE_KEY + "." + projectId + ".link_key", req.getParameter("link_key"));
        response.sendRedirect("settings");
    }
	
}