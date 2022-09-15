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
            bind: { value: '{searchtext}' },
            listeners: {
                change: 'onChange',
            },
        }],

    }, {
        margin: '70px 0',
        xtype: 'fieldcontainer',
        fieldLabel: 'Filters',
        defaultType: 'checkboxfield',
        items: [
            {
                boxLabel: 'Filter 1',
                type: 'A',
                handler: 'filterById'
            }, {
                boxLabel: 'Filter 2',
                type: 'B',
                handler: 'filterById'
            }, {
                boxLabel: 'Filter 3',
                type: 'C',
                handler: 'filterById'
            }
        ]
    }]

});