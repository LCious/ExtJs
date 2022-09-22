Ext.define('FrameworkTest.view.search.SearchModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.searchmodel',
    
    stores:{
        checkBox:{
            data: [
                { title: 'Tipas 1', type:false },
                { title: 'Tipas 2', type: false },
                { title: 'Tipas 3', type: false },
            ],
            autoLoad: true
        }
    },

    data: { 
        searchText: '',
        // selectedType: {
        //     A: false,
        //     B: false,
        //     C: false
        //   },
        selection: '',
    },
    
    formulas: { 
        searchData: { 
            bind: { 
                searchtext: '{searchText}', 
                // selectedType: '{selectedType}',
            }, 
            get: function(data) { 
                return {
                    searchText: data.searchtext,
                    // selectedType: data.selectedType
                 };
                // return data;
            }
        },
        
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }

});