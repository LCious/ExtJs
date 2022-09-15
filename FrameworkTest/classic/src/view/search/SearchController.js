Ext.define('FrameworkTest.view.search.SearchController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.searchcontroller',

    init: function() {
        this.getViewModel().bind('{searchData}', d => { this.getView().fireEvent('searchchange', this.getView(), d); })
    },

    
    onChange:function(textfield, newValue, oldValue, eOpts ){
        if(newValue.length >= 3){
            this.getViewModel().get('searchtext');
        }
    },




    // filterById: function (type) {
    //     var store = Ext.getStore("Items");
    //     store.filterBy(function (rec) {
    //         return rec.get("type") === type;
    //     });
    // }
});        