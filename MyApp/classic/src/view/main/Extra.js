var user = Ext.create('App.model.Personnel', {
    name: 'John',
});
Ext.define('App.view.main.Extra', {
    /*extend: 'Ext.container.Container',
    // extend: 'Ext.tab.Panel',
    xtype: 'extra',
    controller: 'extra',
    items: [{
        title: 'Users',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    },
    {
        xtype: 'button',
        name: 'click',
        text: 'Call controller',
        itemId: 'callController'
    },
    {
        xtype: 'button',
        name: 'click2',
        text: 'Call controller2',
        itemId: 'callController2'
    }
    ]*/
    extend: 'Ext.grid.Panel',
    xtype: 'extra',
    title: 'Grid testing',

    store: { type: 'ExtraApi' },        // Callina is API
    // store: { type: 'extraPerson' },  // Ima is .js failo
    controller: 'extra',
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
    },
    columns: [
        {
            text: 'Name', dataIndex: 'name', filter: {
                type: 'string',
                ////////////////////////////////
                // type:'list',
                // options:['Graham',"Peter","Bruce"]
                ////////////////////////////////
                // type:'number',
            }
        },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        { text: 'Website', dataIndex: 'website', flex: 1 },

    ],
    plugins: 'gridfilters',
    id: 'testGrid',
    selModel: {

        injectCheckbox: 'first',
        checkOnly: true,
        model: 'SIMPLE',
        type: 'checkboxmodel',
    },
    buttons: [
        {
            text: 'Select all',
            handler:function () {
                Ext.getCmp('testGrid').getSelectionModel().selectAll();
            }
        },
        {
            text: 'Removel All',
            handler:function () {
                Ext.getCmp('testGrid').getSelectionModel().deselectAll();
            }
        },
        {
            text: 'Get selected data',
            handler:function () {
                var data = Ext.getCmp('testGrid').getSelectionModel().getSelection();
                console.warn("data", data);
            }
        },
        {
            text: 'Show Popup',
            handler: function () {
                pop = Ext.create('App.view.main.PopUp');
                pop.show();
                console.warn("abc")
            }
        },
    ]


})