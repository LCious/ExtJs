Ext.define('FrameworkTest.view.search.SearchController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.searchcontroller',
    init: function () {
        this.control({
            // reference to the text field in the view
            '#searchItem': {
                change: this.onChange,

            },

        });

    },

    onChange: function (textfield, e, eOpts) {
        if (textfield.getValue().length > 3) {
            console.log('Three');
        }
    },
    filterById: function(type) {
        var store = Ext.getStore('dataviewItems');
            store.filterBy(function(rec) {
                return rec.get('items.type') === type;
            });
    }
});        