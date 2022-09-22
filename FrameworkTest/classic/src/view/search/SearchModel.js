Ext.define('FrameworkTest.view.search.SearchModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.searchmodel',

    stores: {
        checkBox: {
            data: [
                { title: 'Tipas 1', type: 'A' },
                { title: 'Tipas 2', type: 'B' },
                { title: 'Tipas 3', type: 'C' },
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
        selectedType:'',
    },

    formulas: {
        searchData: {
            bind: {
                searchText: '{searchText}',
                selectedType: '{selectedType.type}',
            },
            get: function (data) {
                return {
                    searchText: data.searchText,
                    selectedType: data.selectedType
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