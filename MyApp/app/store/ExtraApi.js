Ext.define('App.store.ExtraApi',{
    extend:'Ext.data.Store',
    alias:'store.ExtraApi',
    // remoteFilter:true, ///visu laiku search'as (filtrai)
    pageSize:2,
    proxy:{
        type:'ajax',
        url:'https://jsonplaceholder.typicode.com/users',
    },
    autoLoad:true,
})