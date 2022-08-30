/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'App.Application',

    name: 'App',

    requires: [
        // This will automatically load all classes in the App namespace
        // so that application classes do not need to require each other.
        'App.*'
    ],

    //  Bandziau i viewporta ikelt main.js
    // launch: function () {
    //     viewport=Ext.getCmp('viewport');
    //     target=viewport.down('#viewport-target');
    //     view=Ext.create('App.view.main.Main');
    //     target.add(view);
    // }, 

    // The name of the initial view to create.
    // mainView: 'App.view.main.Main',
    autoCreateViewport: true,   //naujas viewport 

});
