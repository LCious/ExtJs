Ext.define('FrameworkTest.view.results.ResultController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.resultcontroller',
    // init: function(){
    //     const viewModel = this.getViewModel()
    //     viewModel.bind({
    //         bindTo: '{items}'
    //     })
    // },
    
    goBack:function() {
        var view = this.getView();
        view.setActiveItem('product-list');
    }
});