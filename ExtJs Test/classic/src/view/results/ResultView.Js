Ext.define('FrameworkTest.view.results.ResultView', {
    extend: 'Ext.panel.Panel',
    xtype: 'resultview',
    // controller: 'resultcontroller',
    viewModel: 'resultmodel',
    title: 'DataView',
    flex: 1,
    layout: 'card',
    /*items: {
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
    },*/
    items: [{
        xtype: 'dataview',
        itemId: 'product-list',
        bind: { store: '{items}' },
        itemSelector: 'div.resultview-item',
        tpl: [
            '<tpl for=".">',
            '<div class="resultview-item">',
            '<img src="classic/resources/images/{thumb}" />',
            '<h3>{name}</h3>',
            '</div>',
            '</tpl>'
        ],
        scope: this,
        handler: function () {
            this.layout.setActiveItem('productDetails');
        }
        }, {
        // xtype: '',
        html: '<h1>Product List</h1>',
        itemId: 'productDetails',
        buttons: 
        [{ 
            text:'Back to List',
            reference: 'btnPrev',
            handler:'onPrev',
        }]
    }]

});