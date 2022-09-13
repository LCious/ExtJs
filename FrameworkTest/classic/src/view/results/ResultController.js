Ext.define('FrameworkTest.view.results.ResultController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.resultcontroller',

    onItemClick: function(dataview, record, item, index, e, eOpts) {
        this.getViewModel().set('selectedProduct', record);
    },
    goBack: function(dataview, record, item, index, e, eOpts) {
        this.getViewModel().set('selectedProduct', null);
    },
    onSearchChange: function(){
        console.log('{searchtext}');
    }
    // goBack:function() {
    //     var view = this.getView();
    //     view.setActiveItem('product-list');
    // },
});