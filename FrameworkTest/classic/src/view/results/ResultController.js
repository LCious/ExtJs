Ext.define('FrameworkTest.view.results.ResultController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.resultcontroller',

    goBack:function(){
        var view = this.getView();
        view.setActiveItem('product-list');
    }
});