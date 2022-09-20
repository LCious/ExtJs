/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('FrameworkTest.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onSearchChange: function(searchComponent, searchData, item, index, e, eOpts) { //Bandziau su daugiau parametru (anksciau)
        this.getViewModel().set('searchData', searchData);
        var inputText = this.getViewModel().get('searchData', searchData);
        console.log(inputText);
    },

});
