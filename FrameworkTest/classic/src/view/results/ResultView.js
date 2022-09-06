Ext.define('FrameworkTest.view.results.ResultView', {
    extend: 'Ext.panel.Panel',
    xtype: 'resultview',
    controller: 'resultcontroller',
    viewModel: 'resultmodel',
    title: 'DataView',
    fullscreen: true,
    flex: 1,
    layout: 'card',
    activeItem: 1,
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
        html: '<h1>Product List</h1>',
        xtype: 'dataview',
        id: 'product-list',
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
        listeners: {
            itemclick: {
                fn: function (view, record, item, index, evt, eOpts) {
                    var view = this.getView();
                    currentIndex = view.indexOf(view.getActiveItem()),
                        next = currentIndex + 1;
                    view.setActiveItem(next);
                }
            }
        }
    },
    {
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
                text: 'Back to List',
                reference: 'btnPrev',
                handler: 'goBack',
            }]

    }],
});
