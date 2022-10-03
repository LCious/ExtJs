Ext.define('FrameworkTest.view.results.ResultView', {
    extend: 'Ext.panel.Panel',
    xtype: 'resultview',
    controller: 'resultcontroller',
    viewModel: 'resultmodel',
    fullscreen: true,
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

        function matchesSearchText(searchText, rec){
            return rec.get('title').indexOf(searchText) !== -1;
        };
        function matchesSelectedType(selectedType, rec) {
            return selectedType.indexOf(rec.get('type')) !== -1;
        };
        if (!newFilter.searchText.length || !newFilter.selectedTypes.length) store.clearFilter();
        if (newFilter.searchText.length || newFilter.selectedTypes.length) {
            store.filterBy(rec => {
                if (newFilter.searchText.length && !newFilter.selectedTypes.length) return matchesSearchText(newFilter.searchText, rec);
                if (!newFilter.searchText.length && newFilter.selectedTypes.length) return matchesSelectedType(newFilter.selectedTypes, rec);
                if(newFilter.searchText.length && newFilter.selectedTypes.length) return matchesSelectedType(newFilter.selectedTypes, rec) && matchesSearchText(newFilter.searchText, rec);
            });

        }

        // if (!newFilter.searchText.length || !newFilter.selectedTypes.length) store.clearFilter();
        // if (newFilter.searchText.length) {
        //     store.filter([{
        //         property: "title",
        //         value: newFilter.searchText,
        //         anyMatch: true
        //     }]);
        // }
        // if (newFilter.selectedTypes.length) {
        //     store.filterBy(function (rec) {
        //         return newFilter.selectedTypes.indexOf(rec.get('type')) !== -1;
        //     });
        // }
    },

    bind: {
        activeItem: '{shownProductView}'
    },
    items: [{
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
