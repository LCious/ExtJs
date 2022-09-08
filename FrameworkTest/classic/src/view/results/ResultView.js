Ext.define('FrameworkTest.view.results.ResultView', {
    extend: 'Ext.panel.Panel',
    xtype: 'resultview',
    controller: 'resultcontroller',
    viewModel: 'resultmodel',
    fullscreen: true,
    flex: 1,
    layout: 'card',
    bind: {
        activeItem: '{shownProductView}'
    },
    items: [{
        xtype: 'dataview',
        itemId: 'productList',
        bind: { store: '{items}' },
        itemSelector: 'div.product-item',
        tpl: [
            '<div class="product-list">',
            '<tpl for=".">',
            '<div class="product-item">',
            '<img src="classic/resources/images/{thumb}" />',
            '<h3>{title}</h3>',
            '</div>',
            '</tpl>',
            '</div>',
        ],
        listeners: {
            itemclick: 'onItemClick'
        }
    },
    {
        itemId: 'productDetails',
        layout: {
            type: 'hbox',
            pack: 'start',
            align: 'stretch'
        },
        bodyPadding: 10,
        items: [
            {
                userCls: 'image-side',
                flex: 1,
                items: [{
                    buttons: [{
                        text: 'Back to List',
                        reference: 'btnPrev',
                        handler: 'goBack',
                        left:'0px',
                    }],
                }, {
                    bind: {
                        html: '<img src="classic/resources/images/{selectedProduct.thumb}" />',
                    },
                }]


            },
            {
                flex: 2,
                bind: {
                    title: '{selectedProduct.title}',

                    html: 'Aprasymas: {selectedProduct.desc}<br>Tipas: {selectedProduct.type}',
                },
            }
        ]
    }],
});
