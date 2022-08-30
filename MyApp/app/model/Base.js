Ext.define('App.model.Base', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'id',
        type: 'int'
    }],

    schema: {
        namespace: 'App.model',

        proxy: {     // Ext.util.ObjectTemplate
            type: 'ajax',
            url: '{entityName}.json',
            reader: {
                type: 'json',
                rootProperty: '{entityName:lowercase}'
            }
        }
    }
});
