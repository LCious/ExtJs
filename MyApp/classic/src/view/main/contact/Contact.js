/**
 * This shows an example of a common "Contact Us" form in a popup window. The form uses
 * vbox and hbox layouts to achieve a uniform flexible layout  even when the window is
 * resized.
 *
 * Note that Tab based navigation within the modal window is confined to within the window.
 */
 Ext.define('App.view.contact.ContactForm', {
    extend: 'Ext.form.Panel',
    xtype: 'form-contact',
    controller: 'form-contact',

    title: 'Contact Us',
    flex: 1,
    // width:500,

    bodyPadding: 20,

    items: [{
        margin: '0 0 20 0',
        xtype: 'component',
        layout: {
            align: 'center',
            pack: 'center'
        },
        maxWidth: 500,
        bind: {
            html: '{loremIpsum}'
        }
        
        
    }, {
        xtype: 'container',
        layout: {
            type: 'hbox',
            pack: 'center'
        },
        items: [{
            xtype: 'button',
            cls: 'contactBtn',
            scale: 'large',
            text: 'Contact Us',
            handler: 'showWindow'
        }]
    }]
});