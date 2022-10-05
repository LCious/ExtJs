Ext.define('FrameworkTest.view.search.SearchView', {
    extend: 'Ext.form.Panel',
    controller: 'searchcontroller',
    viewModel: 'searchmodel',
    xtype: 'searchview',
    width: 200,
    items: [{
        // search filters
        xtype: 'toolbar',
        border: false,
        baseCls: '',
        dock: 'top',
        items: [{
            flex: 1,
            xtype: 'textfield',
            listeners: {
                change: 'onChange',
                buffer: 200
            }
        }]
    }, 
    {
        // checkbox filters
        margin: '10 0',
        xtype: 'grid',
        flex: 1,
        columnLines: false,
        bind: {
            store: '{checkBox}',
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

        }],
        listeners: {
            selectionchange: 'selectionChange',
        },
    }]

});