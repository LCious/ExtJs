Ext.define('FrameworkTest.view.results.ResultView', {
    extend: 'Ext.panel.Panel',
    xtype: 'dataview-multisort',
    controller: 'dataview-multisort',

    requires: [
        'Ext.toolbar.TextItem',
        'Ext.view.View',
        'Ext.ux.BoxReorderer',
        'Ext.ux.DataView.Animated'
    ],

    title: 'Multi-sort DataView',
    layout: 'fit',
    width: 540,
    height: 620,

    tbar: {
        plugins: {
            ptype: 'boxreorderer',
            listeners: {
                drop: 'updateStoreSorters'
            }
        },

        defaults: {
            listeners: {
                changeDirection: 'updateStoreSorters'
            }
        },

        items: [{
            xtype: 'tbtext',
            text: 'Sort on these fields:',
            reorderable: false
        }, {
            xtype: 'dataview-multisort-sortbutton',
            text : 'Type',
            dataIndex: 'type'
        }, {
            xtype: 'dataview-multisort-sortbutton',
            text : 'Name',
            dataIndex: 'name'
        }]
    },

    items: {
        xtype: 'dataview',
        reference: 'dataview',
        plugins: {
            ptype: 'ux-animated-dataview'
        },

        itemSelector: 'div.dataview-multisort-item',
        tpl: [
            '<tpl for=".">',
                '<div class="dataview-multisort-item">',
                    '<img src="classic/resources/images/touch-icons/{thumb}" />',
                    '<h3>{name}</h3>',
                '</div>',
            '</tpl>'
        ],

        store: {
            autoLoad: true,
            sortOnLoad: true,
            fields: ['name', 'thumb', 'url', 'type'],
            proxy: {
                type: 'ajax',
                url : 'data/sencha-touch-examples.json',
                reader: {
                    type: 'json',
                    rootProperty: ''
                }
            }
        }
    }
});