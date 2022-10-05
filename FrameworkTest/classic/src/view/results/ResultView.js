Ext.define('FrameworkTest.view.results.ResultView', {
    extend: 'Ext.panel.Panel',
    xtype: 'resultview',
    controller: 'resultcontroller',
    viewModel: 'resultmodel',
    flex: 1,
    layout: 'card',
    config: {
        filter: {
            searchText: '',
            selectedTypes: '',
        }
    },

    updateFilter: function (newFilter) {
        if (this.isConfiguring) return;
        var store = this.getViewModel().getStore('items');
        function matchesSearchText(searchText, rec){            // search text matches
            if(!searchText.length) return true;
            return rec.get('title').indexOf(searchText) !== -1;
        };
        function matchesSelectedType(selectedType, rec) {       // selected type matches
            if(!selectedType.length) return true;
            return selectedType.indexOf(rec.get('type')) !== -1;
        };
        store.clearFilter();
        store.filterBy(rec => {                                 // return search/type
            return matchesSelectedType(newFilter.selectedTypes, rec) && matchesSearchText(newFilter.searchText, rec);
        });
    },

    bind: {
        activeItem: '{shownProductView}'
    },

    items: [{
        itemId: 'productList',
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
    },
    {
        //Responsive product page
        responsiveConfig: {
            tall: {
                layout: {
                    type: 'vbox',
                    align: 'stretch',
                },
            },
            wide: {
                layout: {
                    type: 'hbox',
                    align: 'stretch',
                },
            }
        },
        //Showing productDetails
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
