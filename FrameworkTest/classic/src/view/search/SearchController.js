Ext.define('FrameworkTest.view.search.SearchController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.searchcontroller',

    init: function() {
        this.getViewModel().bind('{searchData}', searchData => {
          let v = this.getView();
          v.fireEvent('searchchange', v, searchData);
        });
      },

    onChange:function(data,newValue,oldValue,eOpts){
        this.getViewModel().set('searchText', newValue);
    },

    selectionChange:function(grid, records, eOpts){
      this.getViewModel().set('selectedTypes', records);
    },
});        