//Load common code that includes config, then load the app logic for this page.
require(['libs'], function () {
    require(["app"], function (myApp) {
        myApp.start();
    });
});



