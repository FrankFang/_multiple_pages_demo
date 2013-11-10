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
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.src %>',
                        dest: '<%= yeoman.dist %>',
                        src: [
                            '*.{ico,txt,html}'
                        ]
                    }
                ]
            }
        },
        watch: {
            options: {
                nospawn: true,
//                livereload: true
            },
            pages: {
                files: ['<%= yeoman.src %>/{,*/}*.html'],
                tasks: ['copy']
            },
            js: {
                files: ['<%= yeoman.src %>/static/js/{,*/}*.js'],
                tasks: ['requirejs']
            }
        },
        requirejs: {
            compile: {
                options: {

                    modules: [
                        {
                            name: 'libs',
                            include: [
                                'jquery',
                                'underscore'
                            ]
                        },
                        {
                            name: 'page1',
                            include: ['models/app.js'],
                            exclude: ['libs']
                        },
                        {
                            name: 'page2',
                            include: ['models/about.js'],
                            exclude: ['libs']
                        }
                    ],
                    baseUrl: "<%= yeoman.src%>/static/js",
                    dir: "<%= yeoman.dist%>/static/js/",
                    optimize: 'none',
                    "paths": {
                        "jquery": "../../bower_components/jquery/jquery.min",
                        "backbone": "../../bower_components/backbone-amd/backbone-min",
                        "underscore": "../../bower_components/underscore-amd/underscore"
                    },
                    "shim": {
//        jquery: {
//            exports: 'jQuery'
//        },
//        backbone: {
//            exports: 'Backbone',
//            deps: ['underscore', 'jquery']
//        },
//        underscore: {
//            exports: '_'
//        }
                    }
                }
            }
        }
    });

    grunt.registerTask('default', [
        'copy',
        'requirejs',
    ]);
    grunt.registerTask('dev', [
        'copy',
        'requirejs',
        'watch'
    ]);
};
