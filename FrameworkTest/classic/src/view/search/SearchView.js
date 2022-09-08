Ext.define('FrameworkTest.view.search.SearchView', {
    extend: 'Ext.panel.Panel',
    xtype: 'searchview',
    margin: '10px',
    items: [{
        xtype: 'toolbar',
        border: true,
        baseCls: 'subMenu',
        margin: '20px 0 0 0',
        dock: 'top',
        height: 40,
        items: [{
            userCls:'searchfield',
            xtype: 'textfield',
            name: 'searchProduct',
            itemId: 'searchProduct',
            enableKeyEvents: true,
            fieldLabel: 'Paieska',
            allowBlank: true,
        }]
    }, {
        margin: '70px 0',
        xtype: 'fieldcontainer',
        fieldLabel: 'Filters',
        defaultType: 'checkboxfield',
        items: [
            {
                boxLabel: 'Filter 1',
                inputValue: '1',
                id: 'checkbox1'
            }, {
                boxLabel: 'Filter 2',
                inputValue: '2',
                id: 'checkbox2'
            }, {
                boxLabel: 'Filter 3',
                inputValue: '3',
                id: 'checkbox3'
            }
        ]
}]
});