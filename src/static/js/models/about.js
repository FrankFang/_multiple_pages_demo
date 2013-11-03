define(function () {
    var $ = require('jquery');

    if ($) { $(document.body).append('I got jQeury<br>'); }
    if (_) { $(document.body).append('I got Underscore<br>'); }
});
