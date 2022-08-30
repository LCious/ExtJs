Ext.define('App.view.main.ExtraController',{
    extend:'Ext.app.ViewController',
    alias:'controller.extra',
    init:function(){
        console.warn("app")
        this.control({
            '#callController':{
                click:'callOnClick',
            },
            '#callController2':{
                click:'callOnClick',
            }
        })
    },
    callOnClick:function(){
        alert('Call Controller clicked');
    }
})

//Buttonu issibandymas pirminis (toliau nenaudojau)