Ext.define('App.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {

        //verify credentials

        
        localStorage.setItem("TutorialLoggedIn", true);

        this.getView().destroy();

        Ext.create({
            xtype: 'app-main'
        });

    }
});