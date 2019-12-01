package ut.pl.gnb.plugins;

import org.junit.Test;
import pl.gnb.plugins.api.MyPluginComponent;
import pl.gnb.plugins.impl.MyPluginComponentImpl;

import static org.junit.Assert.assertEquals;

public class MyComponentUnitTest
{
    @Test
    public void testMyName()
    {
        MyPluginComponent component = new MyPluginComponentImpl(null);
        assertEquals("names do not match!", "myComponent",component.getName());
    }
}