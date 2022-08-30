Ext.define('App.model.extraPerson',{
    extend: 'Ext.data.Model',
    alias: 'model.extraPerson',
    fields: [
        {name:'name'}, // type: int (tik intai)
        {email:'email'},
        {phone:'phone'},
    ]
})