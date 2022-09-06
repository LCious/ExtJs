Ext.define('FrameworkTest.view.results.ResultModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.resultmodel',

    stores: {
        items: {
            data: [
                { name: 'Foo1', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
                { name: 'Foo2', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
                { name: 'Foo3', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
                { name: 'Foo4', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
                { name: 'Foo5', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
                { name: 'Foo6', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
                { name: 'Foo7', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
                { name: 'Foo8', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
                { name: 'Foo9', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
                { name: 'Foo10', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
                { name: 'Foo11', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
                { name: 'Foo12', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
                { name: 'Foo13', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
                { name: 'Foo14', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
                { name: 'Foo15', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
                { name: 'Foo16', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
            ],
            selectedProduct,
            autoLoad: true
        }
    },
    formulas: {
        shownProductView: {
          bind: '{selectedProduct}',
          get: function(selectedProduct) { 
            return get('name') + get('thumb'), get('url'), get('type')
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