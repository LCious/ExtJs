Ext.define('FrameworkTest.view.results.ResultModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.resultmodel',

    stores: {
        items: {
            data: [
                { title: 'Foo1', thumb: 'test.png', desc: '{loremIpsum}', type: 'A' },
                { title: 'Foo2', thumb: 'test.png', desc: '{loremIpsum}', type: 'B' },
                { title: 'Foo3', thumb: 'test.png', desc: '{loremIpsum}', type: 'A' },
                { title: 'Foo4', thumb: 'test.png', desc: '{loremIpsum}', type: 'A' },
                { title: 'Foo5', thumb: 'test.png', desc: '{loremIpsum}', type: 'B' },
                { title: 'Foo6', thumb: 'test.png', desc: '{loremIpsum}', type: 'B' },
                { title: 'Foo7', thumb: 'test.png', desc: '{loremIpsum}', type: 'B' },
                { title: 'Foo9', thumb: 'test.png', desc: '{loremIpsum}', type: 'A' },
                { title: 'Foo10', thumb: 'test.png', desc: '{loremIpsum}', type: 'B' },
                { title: 'Foo11', thumb: 'test.png', desc: '{loremIpsum}', type: 'A' },
                { title: 'Foo12', thumb: 'test.png', desc: '{loremIpsum}', type: 'A' },
                { title: 'Foo13', thumb: 'test.png', desc: '{loremIpsum}', type: 'B' },
                { title: 'Foo14', thumb: 'test.png', desc: '{loremIpsum}', type: 'C' },
                { title: 'Foo15', thumb: 'test.png', desc: '{loremIpsum}', type: 'C' },
                { title: 'Foo16', thumb: 'test.png', desc: '{loremIpsum}', type: 'C' },
                { title: 'Foo17', thumb: 'test.png', desc: '{loremIpsum}', type: 'C' },
                { title: 'Foo18', thumb: 'test.png', desc: '{loremIpsum}', type: 'C' },
                { title: 'Foo19', thumb: 'test.png', desc: '{loremIpsum}', type: 'B' },
                { title: 'Foo20', thumb: 'test.png', desc: '{loremIpsum}', type: 'B' },
                { title: 'Foo21', thumb: 'test.png', desc: '{loremIpsum}', type: 'B' },
                { title: 'Foo22', thumb: 'test.png', desc: '{loremIpsum}', type: 'B' },
                { title: 'Foo23', thumb: 'test.png', desc: '{loremIpsum}', type: 'B' },
            ],
            storeId: 'dataviewItems',
            autoLoad: true
        }
    },
    data: {
        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        selectedProduct: null,
    },
    formulas: {
        shownProductView: {
            bind: '{selectedProduct}',
            get: function (selectedProduct) {
                if (selectedProduct == null) return "productList";
                return "productDetails";
            }
        }
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});