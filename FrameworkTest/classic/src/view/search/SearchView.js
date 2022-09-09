Ext.define('FrameworkTest.view.search.SearchView', {
    extend: 'Ext.panel.Panel',
    controller: 'searchcontroller',
    xtype: 'searchview',
    margin: '10px',
    config:{
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
                name: 'searchItem',
                itemId: 'searchItem',
                enableKeyEvents: true,
                fieldLabel: 'Paieska',
                allowBlank: true,
            }],
            listeners:{
               
            },
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
    }
    
});