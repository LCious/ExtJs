Ext.define('FrameworkTest.view.results.ResultView', {
    extend: 'Ext.panel.Panel',
    xtype: 'resultview',
    controller: 'resultcontroller',
    viewModel: 'resultmodel',
    fullscreen: true,
    flex: 1,
    layout: 'card',
    config:{
        filter:{
            searchText: '',
            selectedType: '',
        }
    },

    updateFilter: function(newFilter) {
        if (this.isConfiguring) return;
        var store = this.getViewModel().getStore('dataviewItems');
        if (newFilter == null) store.clearFilter();     //jei null clear'ina
        store.filter([{
            property: "title",
            value: newFilter,
            anyMatch: true
        }]);
    },

    bind: {
        activeItem: '{shownProductView}'
    },
    items: [{
        responsiveConfig: {
            tall: {
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
            },
            wide: {
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
            }
        },
        
        itemId: 'productList',
        // items: [{
        //     xtype:'searchview',
        //     // dock: 'top',
        //     // margin: '0 10 0 0',
        //     // items: [{
        //     //     xtype: 'textfield',
        //     //     enableKeyEvents: true,
        //     //     placeHolder: 'Enter',
        //     //     // bind: { value: '{searchtext}' },
        //     //     listeners: {
        //     //         change: 'onChange',
        //     //     },
        //     // }],
        // }, 
        // {
            xtype: 'dataview',
            itemId: 'productList',
            bind: { store: '{items}' },
            autoScroll: true,
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
            },
        // }]
    },
    {
        responsiveConfig: {
            tall: {
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
            },
            wide: {
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
            }
        },

        itemId: 'productDetails',
        userCls: 'productDetails',
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
                    }],
                }, {
                    bind: {
                        html: '<img src="classic/resources/images/{selectedProduct.thumb}" />',
                    },
                }]
            },
            {
                userCls: 'text-side',
                flex: 1,
                bind: {
                    title: '{selectedProduct.title}',
                    html: '<div class="item-cont"><div class="cont1">Aprasymas: {selectedProduct.desc}</div><br><div class="cont2">Tipas: {selectedProduct.type}</div></div>',
                },
            }
        ]
    }],
});
