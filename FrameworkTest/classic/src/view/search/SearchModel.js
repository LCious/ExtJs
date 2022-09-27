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
        // selectedTypes: {
        //     A: false,
        //     B: false,
        //     C: false
        //   },
        selectedTypes:[],
    },

    formulas: {
        searchData: {
            bind: {
                searchText: '{searchText}',
                selectedTypes: '{selectedTypes}',
            },
            get: function (data) {
                let object = data.selectedTypes;
                let object_type = object.get('type');
                kazkas = [];
                for(let x of Object.entries(object)){
                    kazkas[x] += object[x];
                }
                return {
                    searchText: data.searchText,
                    selectedTypes: kazkas
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