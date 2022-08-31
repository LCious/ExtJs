Ext.define('FrameworkTest.view.results.ResultView', {
    extend: 'Ext.panel.Panel',
    xtype: 'resultview',
    // controller: 'resultcontroller',

    title: 'DataView',
    width: 400,
    height: 600,

    items: {
        xtype: 'dataview',
        reference: 'dataview',
        store: {
            type: 'result',
        },
        itemSelector: 'div.resultview-item',
        tpl: [
            '<tpl for=".">',
                '<div class="resultview-item">',
                    '<img src="classic/resources/images/{thumb}" />',
                    '<h3>{name}</h3>',
                '</div>',
            '</tpl>'
        ],
    }

    // listeners: {
    //     select: 'onItemSelected'
    // }
});