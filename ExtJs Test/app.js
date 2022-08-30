/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'FrameworkTest.Application',

    name: 'FrameworkTest',

    requires: [
        // This will automatically load all classes in the FrameworkTest namespace
        // so that application classes do not need to require each other.
        'FrameworkTest.*'
    ],

    // The name of the initial view to create.
    mainView: 'FrameworkTest.view.main.Main'
});
