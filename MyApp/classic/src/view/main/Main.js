/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
var panel = Ext.create('Ext.panel.Panel', {
    width: 200,
    height: 100,
    floating: true, // make this panel an absolutely-positioned floating component
    title: 'Test',
    html: 'Test Panel'
});

Ext.define('App.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'App.view.main.MainController',
        'App.view.main.MainModel',
        'App.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',
    // plugins: 'viewport',     //sita enable if login

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
        iconCls: 'fa-tags',
        items: [{
            xtype: 'button',
            text: 'Logout',
            margin: '10 10 10 10',
            handler: 'onClickButton'
        }]
    },
    footer:{
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-tags',
        html: 'labas',

        
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top',
            footerPosition: 'bottom'
        },
        wide: {
            headerPosition: 'top',
            footerPosition: 'bottom',
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
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
        // items: [{
        // xtype: 'extra',
        // }],
        // // The following grid shares a store with the classic version's grid as well!
        // items: [{
        //     xtype: 'mainlist'
        //     // xtype: 'extra'
        // }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        items: [{
            xtype: 'extra',
        }],
        
        // bind: {
        //     html: '{loremIpsum}'
        // }
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        // bind: {
        //     html: '{loremIpsum}'
        // }
    },{
        title: 'Contacts',
        iconCls: 'fa-mail',
        items: [{
            // xtype: 'search', //mano contact form
            xtype: 'form-contact', //generated 
        }],
    }]
});
// panel.show();

//Bandziau padaryt kad rodytu Useri
var store = new Ext.data.Store ({
    model: 'App.model.User'
});

store.load({
    callback:function(){
        var first_name = this.first().get('name');
         console.log(first_name);
    }
});

