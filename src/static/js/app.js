define(['marionette', 'todo/layout'], function (M, TodoLayout) {
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');

    var myApp = new Backbone.Marionette.Application();

    myApp.addInitializer(function () {
        var todoLayout = new TodoLayout();
//        this.main.show(todoLayout);
    });

    myApp.addRegions({
        main: '#app'
    });

    return myApp;
});
