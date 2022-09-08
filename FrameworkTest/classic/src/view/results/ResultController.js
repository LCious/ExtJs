Ext.define('FrameworkTest.view.results.ResultController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.resultcontroller',
    // init: function(){
    //     const viewModel = this.getViewModel()
    //     viewModel.bind({
    //         bindTo: '{items}'
    //     })
    // },
    

    onItemClick: function(dataview, record, item, index, e, eOpts) {
        this.getViewModel().set('selectedProduct', record);
    },
    goBack: function(dataview, record, item, index, e, eOpts) {
        this.getViewModel().set('selectedProduct', null);
    },
    
    // goBack:function() {
    //     var view = this.getView();
    //     view.setActiveItem('product-list');
    // },
});