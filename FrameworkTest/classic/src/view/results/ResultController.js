Ext.define('FrameworkTest.view.results.ResultController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.resultcontroller',

    onItemClick: function(dataview, record, item, index, e, eOpts) {
        this.getViewModel().set('selectedProduct', record);
    },
    goBack: function(dataview, record, item, index, e, eOpts) {
        this.getViewModel().set('selectedProduct', null);
    },

    // ResultController'yje eventas, filtravimui
    onSearchChange: function (textfield, newValue, oldValue, eOpts) {
        if (newValue == '') {
            dataview.getStore('Items').clearFilter();
        } else {
            dataview.getStore('Items').load().filter([{
                property: 'type',
                value: newValue,
                anyMatch: true
            }]);
        }
    }

});