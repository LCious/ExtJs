Ext.define('FrameworkTest.view.results.ResultModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.resultmodel',

    stores: {
        items: {
            data: [
                { title: 'Foo1', thumb: 'test.png', desc: '{loremIpsum}', type: 'Kazkas' },
                { title: 'Foo2', thumb: 'test.png', desc: '{loremIpsum}', type: 'Kazkas' },
                { title: 'Foo3', thumb: 'test.png', desc: '{loremIpsum}', type: 'Kazkas' },
                { title: 'Foo4', thumb: 'test.png', desc: '{loremIpsum}', type: 'Kazkas' },
                { title: 'Foo5', thumb: 'test.png', desc: '{loremIpsum}', type: 'Kazkas' },
                { title: 'Foo6', thumb: 'test.png', desc: '{loremIpsum}', type: 'Kazkas' },
                { title: 'Foo7', thumb: 'test.png', desc: '{loremIpsum}', type: 'Kazkas' },
                { title: 'Foo8', thumb: 'test.png', desc: '{loremIpsum}', type: 'Kazkas' },
                { title: 'Foo9', thumb: 'test.png', desc: '{loremIpsum}', type: 'Kazkas' },
                { title: 'Foo10', thumb: 'test.png', desc: '{loremIpsum}', type: 'Kazkas' },
            ],
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
                if (selectedProduct == null) {
                    return "productList";
                } else if (selectedProduct != null) {  return "productDetails"; }
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