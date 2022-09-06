Ext.define('FrameworkTest.view.results.ResultView', {
    extend: 'Ext.panel.Panel',
    xtype: 'resultview',
    controller: 'resultcontroller',
    viewModel: 'resultmodel',
    
    title: 'DataView',
    fullscreen: true,
    flex: 1,
    layout: 'card',
    activeItem: 0,

    items: [{
        html: '<h1>Product List</h1>',
        xtype: 'dataview',
        id: 'product-list',
        bind: { store: '{items}' },
        itemSelector: 'div.product-item',
        tpl: [
            '<div class="product-list">',
            '<tpl for=".">',
            '<div class="product-item">',
            '<img src="classic/resources/images/{thumb}" />',
            '<h3>{name}</h3>',
            '</div>',
            '</tpl>',
            '</div>',
        ],
    },
    {
        html: '<h1>Product List</h1>',
        itemId: 'productDetails',
        itemSelector: 'div.product-item',
        bind: {
            title: '{selectedProduct.title}',
            img: '{selectedProduct.img}',
            desc: '{selectedProduct.desc}',
        },
        tpl: [
            '<tpl for=".">',
            '<div class="product-item">',
            '<img src="classic/resources/images/{thumb}" />',
            '<h3>{name}</h3>',
            '</div>',
            '</tpl>'
        ],
        buttons:
            [{
                text: 'Back to List',
                reference: 'btnPrev',
                handler: 'goBack',
            }]

    }],
});
