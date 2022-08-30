// Ext.define('App.view.Viewport', {
//     extend: 'Ext.container.Viewport',
//     id: 'viewport',
//     items: [
//         {
//             region: 'north',
//             html: '<h1>Header part</h1>',
//         },
//         {
//             region: 'center',
//             xtype: 'tabpanel',
//             activeTab: 0,
//             itemId: 'viewport-target',
//         },
//         {
//             region: 'south',
//             html: '<h1>footer part</h1>',
//         }]
// })

Ext.define('App.view.Viewport', {

    extend: 'Ext.panel.Panel',
    xtype: 'layout-border',
    id: 'viewport',
    requires: [
        'Ext.layout.container.Border'
    ],
    profiles: {
        classic: {
            itemHeight: 100
        },
        neptune: {
            itemHeight: 100
        },
        graphite: {
            itemHeight: 120
        }
    },
    layout: 'border',
    width: 500,
    height: 400,

    bodyBorder: false,

    defaults: {
        collapsible: false,
        split: false,
        bodyPadding: 0,
    },

    items: [
        {
            region: 'south',
            height: 100,
            minHeight: 75,
            maxHeight: 150,
            html: '<p>Footer content</p>'
        },
        // TODO
        {
            title: 'Navigation',
            region:'west',
            floatable: false,
            margin: '5 0 0 0',
            width: 170,
            minWidth: 100,
            maxWidth: 250,
            html: '<p>Secondary content like navigation links could go here</p>'
        },
        {
            title: 'Main content',
            collapsible: false,
            region: 'center',
            margin: '5 0 0 5',
            // xtype: 'tabpanel',
            // activeTab: 0,
            // itemId: 'viewport-target',
        },
        {
            title: 'Header',
            region: 'north',
            
            minHeight: 75,
            maxHeight: 300,
            
            items:[{
                
                xtype: 'nav',
            }]
        },
    ]

});