Ext.define('FrameworkTest.view.results.ResultModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.resultmodel',

    stores: {
        items: {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url : '/classic/resources/json/dataview-data.json',
            }
        } 
    },

    data: {
        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        selectedProduct: null,
    },

    formulas: {
        shownProductView: {                 // switch between product list and product view
            bind: '{selectedProduct}',
            get: function (selectedProduct) {
                if (selectedProduct == null) return "productList";
                return "productDetails";
            }
        }
    },
});