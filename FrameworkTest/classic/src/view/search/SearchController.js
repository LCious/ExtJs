Ext.define('FrameworkTest.view.search.SearchController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.searchcontroller',

    init: function() {
        this.getViewModel().bind('{searchData}', searchData => {
          let v = this.getView();
          v.fireEvent('searchchange', v, searchData);
        });
      },


    // onChange: function (data, newValue, oldValue, eOpts) {
    //     var inputText = this.getViewModel().get('searchText');
    //     // var inputType = this.getViewModel().get('selectedType');
    //     console.log(inputText);
    // },
    // onCheck: function(checkboxfield, eOpts){
    //     var inputType = this.getViewModel().get('selectedType');
    //     console.log(inputType);
    // }





    // filterById: function (type) {
    //     var store = Ext.getStore("Items");
    //     store.filterBy(function (rec) {
    //         return rec.get("type") === type;
    //     });
    // }
});        