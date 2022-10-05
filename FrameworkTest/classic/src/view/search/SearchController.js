Ext.define('FrameworkTest.view.search.SearchController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.searchcontroller',

    init: function() {                  // fire data => Main.js
        this.getViewModel().bind('{searchData}', searchData => {
          let v = this.getView();
          v.fireEvent('searchchange', v, searchData);
        });
      },

    onChange:function(data,newValue,oldValue,eOpts){    // search change event
        this.getViewModel().set('searchText', newValue);
    },

    selectionChange:function(grid, records, eOpts){     // checkBox selection change event
      this.getViewModel().set('selectedTypes', records);
    },
});        