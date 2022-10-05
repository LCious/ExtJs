Ext.define('FrameworkTest.view.results.ResultController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.resultcontroller',

    onItemClick: function(dataview, record, item, index, e, eOpts) {    // item click function
        this.getViewModel().set('selectedProduct', record);
    },

    goBack: function(dataview, record, item, index, e, eOpts) {         // go back functionality
        this.getViewModel().set('selectedProduct', null);
    },
});