'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    var yeomanConfig = {
        src: '../src',
        dist: '../dist'
    }

    grunt.initConfig({
        yeoman: yeomanConfig,
        copy: {
            target: {
                files: [
                    {
                        src: '../src/app.html',
                        dest: '../dist/app.html'
                    },
                    {
                        src: '../src/bower_components/requirejs/require.js',
                        dest: '../dist/bower_components/requirejs/require.js'
                    }
                ]
            }

        },
        requirejs: {
            compile: {
                options: {
                    modules: [
                        {
                            name: 'main',
                            exclude: ['jquery', 'underscore']
                        },
                        {
                            name: 'backbone',
                            exclude: ['jquery', 'underscore']
                        }
                    ],
                    baseUrl: "<%= yeoman.src%>/static/js",
                    mainConfigFile: "<%= yeoman.src%>/static/js/require_config.js",
                    dir: "<%= yeoman.dist%>/static/js/",
                    optimize: 'none',
                    wrap: true
                }
            }
        }
    });

    grunt.registerTask('default', [
        'copy',
        'requirejs'
    ]);
};
