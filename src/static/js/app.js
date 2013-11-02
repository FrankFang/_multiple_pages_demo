define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
    var App = Backbone.View.extend({
        defaults: {
            name: 'app'
        },
        hello: function () {
            if ($) { $(document.body).append('I got jQeury<br>'); }
            if (_) { $(document.body).append('I got Underscore<br>'); }
        }
    });
    return App;
})
