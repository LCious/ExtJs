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
                let checkBox_data= data.selectedTypes;
                // let object_type = object.getValues('type');
                selected_filters = [];
                for(let x of checkBox_data){
                    selected_filters[x] += checkBox_data[x];
                }
                return {
                    searchText: data.searchText,
                    selectedTypes: selected_filters
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