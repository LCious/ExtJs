Ext.define('FrameworkTest.view.results.ResultView', {
    extend: 'Ext.panel.Panel',
    xtype: 'resultview',
    // controller: 'resultcontroller',
    viewmodel: 'resultmodel',
    title: 'DataView',
    flex: 1,
    items: {
        xtype: 'dataview',
        reference: 'dataview',
        bind: { store: '{items}' },
        itemSelector: 'div.resultview',
        tpl: [
            '<tpl for=".">',
            '<div class="resultview-item">',
            '<img src="classic/resources/images/{thumb}" />',
            '<h3>{name}</h3>',
            '</div>',
            '</tpl>'
        ],
        // store: {
        //     autoLoad: true,
        //     sortOnLoad: true,
        //     type: 'result',
        // },
    }
    // listeners: {
    //     select: 'onItemSelected'
    // }
    
});