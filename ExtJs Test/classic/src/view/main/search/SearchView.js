Ext.define('FrameworkTest.view.search.SearchView', {
    extend: 'Ext.panel.Panel',
    xtype: 'test-search',

    title: 'Search the Ext Forums',
    width: 600,
    bodyPadding: 10,
    layout: 'anchor',

    height: 300,

    items: [{
        xtype: 'combo',
        // store: {
        //     type: 'form-forum-posts',
        //     pageSize: 10
        // },
        displayField: 'title',
        typeAhead: false,
        hideLabel: true,
        hideTrigger:true,
        anchor: '100%',

        listConfig: {
            loadingText: 'Searching...',
            emptyText: 'No matching posts found.',

            itemSelector: '.search-item',

            // Custom rendering template for each item
            itemTpl: [
                '<a class="search-item" href="http://www.sencha.com/forum/showthread.php?t={topicId}&p={id}">',
                    '<h3><span>{[Ext.Date.format(values.lastPost, "M j, Y")]}<br />by {author}</span>{title}</h3>',
                    '{excerpt}',
                '</a>'
            ]
        }
    }, {
        xtype: 'component',
        margin: '10 0 0 0',
        html: 'Live search requires a minimum of 4 characters.'
    }]
});