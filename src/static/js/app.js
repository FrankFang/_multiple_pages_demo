define(['jquery', 'backbone'], function ($, Backbone) {
    var App = Backbone.View.extend({
        defaults: {
            name: 'app'
        }
    });

    return App;
})
