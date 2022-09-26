Ext.define('FrameworkTest.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'FrameworkTest.view.main.MainController',
        'FrameworkTest.view.main.MainModel',
        'FrameworkTest.view.results.ResultView',
        'FrameworkTest.view.search.SearchView'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list',
    },

    tabBar: {
        flex: 0,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'top'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'right',
                    textAlign: 'right',
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        responsiveConfig: {
            wide: {
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
            },
            tall: {
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
            }
        },
        items: [
            {
                xtype: 'searchview',
                listeners: {
                    searchchange: 'onSearchChange'
                }
            },
            {
                flex: 1,
                xtype: 'resultview',
                bind: {
                    filter: '{searchData}'
                }
            }],
    }, {
        title: 'Contacts',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
