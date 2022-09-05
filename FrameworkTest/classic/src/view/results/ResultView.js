Ext.define('FrameworkTest.view.results.ResultView', {
    extend: 'Ext.Container',
    xtype: 'resultview',
    controller: 'resultcontroller',
    viewModel: 'resultmodel',
    title: 'DataView',
    flex: 1,
    layout: 'card',
    activeItem: 0,
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
        itemSelector: 'div.product-list',
        tpl: [
            '<tpl for=".">',
            '<div class="product-list">',
            '<img src="classic/resources/images/{thumb}" />',
            '<h3>{name}</h3>',
            '</div>',
            '</tpl>'
        ],
        handler: 'onClick',
        // listeners: {
        //     itemclick: function (_this, record, item, index, e, eOpts) {
        //         this.layout.setActiveItem('productDetails'); 
        //     }
        // }
            // handler: function(itemSelector) {            
            //     this.layout.setActiveItem('productDetails');         
            // }
        }, {
       
        html: '<h1>Product List</h1>',
        itemId: 'productDetails',
        // bind: { store: '{items}' },
        // itemSelector: 'div.product-item',
        // tpl: [
        //     '<tpl for=".">',
        //     '<div class="product-item">',
        //     '<img src="classic/resources/images/{thumb}" />',
        //     '<h3>{name}</h3>',
        //     '</div>',
        //     '</tpl>'
        // ],
        buttons: 
        [{ 
            text:'Back to List',
            reference: 'btnPrev',
            handler:'onPrev',
        }]

    }],        
});