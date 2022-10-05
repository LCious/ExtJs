Ext.define('FrameworkTest.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'FrameworkTest.view.main.MainController',
        'FrameworkTest.view.main.MainModel',
        'FrameworkTest.view.results.ResultView',
        'FrameworkTest.view.search.SearchView'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            align: 'center',
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

    defaults:{
        bodyPadding: 20,
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        responsiveConfig: {         
            wide: {
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                }
            },
            tall: {
                layout: {
                    type: 'vbox',
                    align: 'stretch',
                }
            }
        },
        items: [            // search/checkbox filters + product list/product view
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
            }]
    }, {
        title: 'Contacts',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
