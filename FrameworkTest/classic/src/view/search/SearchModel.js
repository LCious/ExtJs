Ext.define('FrameworkTest.view.search.SearchModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.searchmodel',

    data: { 
        searchtext: '' ,
        selectedType: '',
    },

    formulas: { 
        searchData: { 
            bind: { 
                searchtext: '{searchtext}', 
                selectedType: '{selectedType}'
            }, 
            get: function(data) { 
                // if (searchtext == null && selectedType == null) return;
                return data;
            }
        }
    }

});