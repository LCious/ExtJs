Ext.define('FrameworkTest.view.search.SearchController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.searchcontroller',

    init: function() {
        this.getViewModel().bind('{searchData}', d => { this.getView().fireEvent('searchchange', this.getView(), d); })
    },

    
    onChange:function(textfield, newValue, oldValue, eOpts ){
        if(newValue.length >= 3){
            console.log(newValue)
        }
    },




    // filterById: function (type) {
    //     var store = Ext.getStore('dataviewItems');
    //     store.filterBy(function (rec) {
    //         return rec.get('items.type') === type;
    //     });
    // }
});        