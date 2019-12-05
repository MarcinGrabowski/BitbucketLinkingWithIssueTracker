package pl.gnb.plugins.provider;

import com.atlassian.plugin.web.ContextProvider;
import com.atlassian.sal.api.pluginsettings.PluginSettings;
import com.atlassian.sal.api.pluginsettings.PluginSettingsFactory;
import com.atlassian.soy.renderer.SoyTemplateRenderer;
import com.atlassian.bitbucket.project.ProjectService;
import com.atlassian.plugin.PluginParseException;
import com.atlassian.plugin.spring.scanner.annotation.imports.ComponentImport;
import com.atlassian.sal.api.pluginsettings.PluginSettings;
import com.atlassian.sal.api.pluginsettings.PluginSettingsFactory;

import com.atlassian.jira.project.browse.BrowseContext;

import java.util.Map;

import javax.inject.Inject;

import com.google.common.collect.ImmutableMap;

public class PrivateWidgetsContextProvider implements ContextProvider {
	@ComponentImport
    private final PluginSettingsFactory pluginSettingsFactory;
	
	@Inject
    public PrivateWidgetsContextProvider(PluginSettingsFactory pluginSettingsFactory) {
        this.pluginSettingsFactory = pluginSettingsFactory;
    }

    @Override
    public void init(Map<String, String> params) throws PluginParseException {

    }

    @Override
    public Map<String, Object> getContextMap(Map<String, Object> context) {
    	
    	PluginSettings pluginSettings = pluginSettingsFactory.createGlobalSettings();
		//String linkUrl = (String) pluginSettings.get(PLUGIN_STORAGE_KEY + "." + project.getId() + ".link_url");
		//String linkKey = (String) pluginSettings.get(PLUGIN_STORAGE_KEY + "." + project.getId() + ".link_key");
    	
        return ImmutableMap.<String, Object>builder()
                .put("widgets", "test")
                .build();
    }
}