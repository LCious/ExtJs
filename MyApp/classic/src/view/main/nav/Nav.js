Ext.define('App.view.nav.Nav', {
    extend: 'Ext.tab.Panel',
    xtype: 'nav',

    flex: 1,

    ui: 'navigation',
    tabBar: {
        layout: {
            
            pack: 'center'
        },
        border: false
    },

    defaults: {
        iconAlign: 'top',
        bodyPadding: 15
    },
    id:'navigation',
    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        
        
    }, {
        title: 'Users',
        
        items: [{
            xtype: 'extra',
        }],
    }, {
        title: 'Groups',
        
        items: [{
            // xtype: 'search', //mano contact form
            xtype: 'form-contact', //generated 
        }],
    }, {
        title: 'Settings',
        
        
    }]
});