/**
 * Created by frank on 13-11-11.
 */

define(['marionette', 'handlebars'], function (M, H) {
//    console.log(H.compile);

    var Backbone = require('backbone');
    var TodoLayout = Backbone.Marionette.Layout.extend({
//        template: H.compile('<div class="todo_panel"></div>')

    });

    return TodoLayout;
});
