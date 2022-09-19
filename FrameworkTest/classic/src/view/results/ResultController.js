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
    onChange: function (textfield, newValue, oldValue, eOpts) {
        var store = Ext.getStore('dataviewItems');
        // var store = this.down('dataview').getStore();
        if (newValue != null){
            // store.filterBy(function(rec) {
            //     return rec.get('type') === newValue;
            // });
            store.filter([{
                property: "title",
                value: newValue,
                anyMatch: true
            }]);
        } else {
            store.clearFilter();
        }
    }
});