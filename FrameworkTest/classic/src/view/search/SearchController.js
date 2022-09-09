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
    filterByType: function(type) {
        var store = Ext.getStore('dataviewItems');
        if (type) {
            store.filterBy(function(rec) {
                return rec.get('data.type') === type;
            });
        } else {
            store.clearFilter();
        }
    }
});        