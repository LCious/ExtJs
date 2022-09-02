//Alternatyva
Ext.define('FrameworkTest.view.results.Result', {
    extend: 'Ext.data.Store',

    alias: 'store.result',

    model: 'FrameworkTest.view.results.ResultModel',

    data: [
        { name: 'Foo1', thumb: 'test.png', url: 'test.com', type:'Kazkas' },
        { name: 'Foo2', thumb: 'test.png', url: 'test.com', type:'Kazkas' },
        { name: 'Foo3', thumb: 'test.png', url: 'test.com', type:'Kazkas' },
        { name: 'Foo4', thumb: 'test.png', url: 'test.com', type:'Kazkas' },
        { name: 'Foo5', thumb: 'test.png', url: 'test.com', type:'Kazkas' },
        { name: 'Foo6', thumb: 'test.png', url: 'test.com', type:'Kazkas' },
        { name: 'Foo6', thumb: 'test.png', url: 'test.com', type:'Kazkas' },
        { name: 'Foo6', thumb: 'test.png', url: 'test.com', type:'Kazkas' },
        { name: 'Foo6', thumb: 'test.png', url: 'test.com', type:'Kazkas' },
        { name: 'Foo6', thumb: 'test.png', url: 'test.com', type:'Kazkas' },
        { name: 'Foo6', thumb: 'test.png', url: 'test.com', type:'Kazkas' },
        { name: 'Foo6', thumb: 'test.png', url: 'test.com', type:'Kazkas' },
        { name: 'Foo6', thumb: 'test.png', url: 'test.com', type:'Kazkas' },
        { name: 'Foo6', thumb: 'test.png', url: 'test.com', type:'Kazkas' },
        { name: 'Foo6', thumb: 'test.png', url: 'test.com', type:'Kazkas' },
        { name: 'Foo6', thumb: 'test.png', url: 'test.com', type:'Kazkas' },
        { name: 'Foo6', thumb: 'test.png', url: 'test.com', type:'Kazkas' },
        { name: 'Foo6', thumb: 'test.png', url: 'test.com', type:'Kazkas' },
        
    ],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});
