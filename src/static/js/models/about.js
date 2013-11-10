define(function () {
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');

    $(document.body).append('I am about.js<br>')
    if ($) { $(document.body).append('I got jQeury<br>'); }
    if (_) { $(document.body).append('I got Underscore<br>'); }
    if (Backbone) { $(document.body).append('I got Backbone<br>'); }
});
