define(['jquery', 'backbone'], function ($, Backbone) {
    var App = Backbone.View.extend({
        defaults: {
            name: 'app'
        },
        hello: function () {
            alert(['I got jQuery & Backbone' , $ , Backbone].join('\n'));
        }
    });

    return App;
})
