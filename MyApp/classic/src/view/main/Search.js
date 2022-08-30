///Filtrai o ne search XZD
//Pakeisti pavadinima
Ext.define('App.view.main.Search', {
    extend: 'Ext.form.Panel',
    title:'Form tutorial',
    xtype:'search',
    defaultType:'textfield',
    items:[
        {
        fieldLabel:'First Name',
        name:'firstName',
        },
        {
        fieldLabel:'Last Name',
        name:'lastName',
        },
        {
        fieldLabel:'Email Address',
        name:'emailAddress',
        },
        {
        xtype: 'textarea',
        fieldLabel: 'Message text',
        emptyText: 'Message goes here',
        hideLabel: false,
        name: 'msg',
        },
        {
            xtype:'datefield',
        fieldLabel:'DOB',
        name:'dob',
        },
        
    ],
    buttons:[{
        text:'Submit',
        region:'west',
        handler:function(btn){
            var data=this.up('form');
            console.warn("print the form data", data.getForm().getValues());
        }
        
    }]
})