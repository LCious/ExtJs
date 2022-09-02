Ext.define('FrameworkTest.view.results.ResultController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.resultcontroller',

    onPrev:function(){
        this.doNavigation(-1);
    },
    doNavigation:function(index){
        var view=this.getView();
        currentIndex=view.indexOf(view.getActiveItem()),
        next=currentIndex+index;
        view.setActiveItem(next);
        view.lookup('btnPrev').setDisabled(next==0);
        view.lookup('btnNext').setDisabled(next==2);
    }
});