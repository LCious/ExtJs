Ext.define('FrameworkTest.view.search.SearchModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.searchmodel',

    data: { 
        searchText: '' ,
        selectedType: '',
    },
    
    formulas: { 
        searchData: { 
            bind: { 
                searchtext: '{searchText}', 
                selectedType: '{selectedType}'
            }, 
            get: function(data) { 
                return {
                    searchText: data.searchtext,
                    selectedType: data.selectedType
                 };
                // return data;
            }
        }
    }

});