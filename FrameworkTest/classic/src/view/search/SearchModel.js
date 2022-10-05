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
        selectedTypes:'',
    },

    formulas: {
        searchData: {
            bind: {
                searchText: '{searchText}',
                selectedTypes: '{selectedTypes}',
            },
            get: function (data) {
                let checkBox_data= data.selectedTypes;
                let selected_filters = [];
                for(let x of checkBox_data){
                    let p = x.get('type');
                    selected_filters.push(p);
                }
                return {
                    searchText: data.searchText,
                    selectedTypes: selected_filters
                };
            }
        },

    },
});