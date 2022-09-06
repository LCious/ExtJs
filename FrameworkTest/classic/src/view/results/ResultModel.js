Ext.define('FrameworkTest.view.results.ResultModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.resultmodel',

    // fields: [
    //     'name', 'thumb', 'url', 'type',
    // ],

    // data: [
    //     { name: 'Foo1', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //     { name: 'Foo2', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //     { name: 'Foo3', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //     { name: 'Foo4', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //     { name: 'Foo5', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //     { name: 'Foo6', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    // ],

    stores: {
        items: {
            // name: '{name}',
            // thumb: '{thumb}',
            // url: '{url}',
            // type: '{type}',
            data: [
                { name: 'Foo1', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
                { name: 'Foo2', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
                // { name: 'Foo3', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
                // { name: 'Foo4', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
            ],
            autoLoad: true
        }
    },

    /*
    // store: {
    //     fields: [
    //         'name', 'thumb', 'url', 'type',
    //     ],
    //     data: [
    //         { name: 'Foo1', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //         { name: 'Foo2', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //         { name: 'Foo3', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //         { name: 'Foo4', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //         { name: 'Foo5', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //         { name: 'Foo6', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //         { name: 'Foo6', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //         { name: 'Foo6', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //         { name: 'Foo6', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //         { name: 'Foo6', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //         { name: 'Foo6', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //         { name: 'Foo6', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //         { name: 'Foo6', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //         { name: 'Foo6', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //         { name: 'Foo6', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //         { name: 'Foo6', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //         { name: 'Foo6', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //         { name: 'Foo6', thumb: 'test.png', url: 'test.com', type: 'Kazkas' },
    //     ],
    // },
    */

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});