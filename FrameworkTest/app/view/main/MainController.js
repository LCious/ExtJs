/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('FrameworkTest.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onSearchChange: function() {
        var inputText = this.getViewModel().set('searchText');
        // var inputType = this.getViewModel().get('selectedType');
        console.log(inputText);
    },

    // onSearchChange: function() {
    //     Ext.Msg.alert('Success!', this.getXType());
    // },
    // scope: 'resultview',

});
