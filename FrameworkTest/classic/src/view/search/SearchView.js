Ext.define('FrameworkTest.view.search.SearchView', {
    extend: 'Ext.form.Panel',
    controller: 'searchcontroller',
    viewModel: 'searchmodel',
    xtype: 'searchview',
    // flex: 1,
    width: 200,
    margin: '10px',
    items: [{
        xtype: 'toolbar',
        border: false,
        baseCls: '',
        dock: 'top',
        items: [{
            flex:1,
            xtype: 'textfield',
            enableKeyEvents: true,
            placeHolder: 'Enter',
            // bind: { value: '{searchText}' },
            listeners: {
                change: 'onChange',
                buffer: 200
            }
        }]
    }, {
        // margin: '70px 0',
        // xtype: 'fieldcontainer',
        // fieldLabel: 'Filters',
        // defaultType: 'checkboxfield',
        // items: [
        //     {
        //         boxLabel: 'Type A',
        //         bind: { value: 'selectedType.A'},
        //     }, {
        //         boxLabel: 'Type B',
        //         bind: { value: 'selectedType.B'},
        //     }, {
        //         boxLabel: 'Type C',
        //         bind:{value: '{selectedType.C}'},
        //     }
        // ]

        // TO DO GRID
        margin: '30px 0 0 0',
        xtype: 'grid',
        flex: 1,
        columnLines: false,
        bind: {
            store: '{checkBox}',
            selection: '{selectedTypes}'
        },
        selModel: {
            type: 'checkboxmodel',
            checkOnly: true,
        },
        columns: [{
            flex: 1,
            text: 'Filtrai',
            dataIndex: 'title',
            sortable: false,
        }]
    }]

});