Ext.define('FrameworkTest.view.search.SearchView', {
    extend: 'Ext.form.Panel',
    controller: 'searchcontroller',
    viewModel: 'searchmodel',
    xtype: 'searchview',
    
    margin: '10px',
    items: [{
        xtype: 'toolbar',
        border: false,
        baseCls: '',
        title: 'Search',
        dock: 'top',
        items: [{
            xtype: 'textfield',
            enableKeyEvents: true,
            placeHolder: 'Enter',
            // bind: { value: '{searchText}' },
            listeners: {
                change: 'onChange',
                buffer: 200,
            },
        }],
    }, {
        // margin: '70px 0',
        // xtype: 'fieldcontainer',
        // fieldLabel: 'Filters',
        // defaultType: 'checkboxfield',
        // items: [
        //     {
        //         boxLabel: 'Type A',
        //         bind: { value: 'selectedType.A'},
        //         // listeners: {
        //         //     check: 'onCheck',
        //         // },
        //     }, {
        //         boxLabel: 'Type B',
        //         bind: { value: 'selectedType.B'},
        //         // listeners: {
        //         //     change: 'onChange',
        //         // },
        //     }, {
        //         boxLabel: 'Type C',
        //         bind:{value: '{selectedType.C}'},
        //         // listeners: {
        //         //     change: 'onChange',
        //         // },
        //     }
        // ]

        // TO DO GRID
        margin: '70px 0',
        xtype: 'grid',
        width: 150,
        columnLines: false,
        bind: {
            store:'{checkBox}',
            selection:'{selectedType}'
        },
        selModel: {
            type: 'checkboxmodel',
            checkOnly: true,
        },
        columns: [{
            text: 'Filtrai',
            dataIndex: 'title',
            sortable: false,
        }]
    }]

});