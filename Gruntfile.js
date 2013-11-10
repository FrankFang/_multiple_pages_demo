'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    var yeomanConfig = {
        src: 'src',
        dist: 'dist',
        bower: 'bower_components'
    }

    grunt.initConfig({
        yeoman: yeomanConfig,
        clean: ['<%= yeoman.dist %>'],
        copy: {
            dist: {
                files: [
                    {
                        dest: '<%= yeoman.dist%>/static/js/require.js',
                        src: '<%= yeoman.bower%>/requirejs/require.js'
                    }
                ]
            }
        },
        watch: {
            options: {
                nospawn: true,
                livereload: true
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
                        "jquery": "../../../bower_components/jquery/jquery.min",
                        "backbone": "../../../bower_components/backbone/backbone-min",
                        "underscore": "../../../bower_components/underscore/underscore"
                    },
                    "shim": {
                        backbone: {
                            exports: 'Backbone',
                            deps: ['underscore', 'jquery']
                        },
                        underscore: {
                            exports: '_'
                        }
                    }
                }
            }
        },
        targethtml: {
            dist: {
                files: {
                    '<%= yeoman.dist%>/page1.html': '<%= yeoman.src%>/page1.html',
                    '<%= yeoman.dist%>/page2.html': '<%= yeoman.src%>/page2.html'
                }
            },
            dev:{
                files: {
                    '<%= yeoman.dist%>/page1.html': '<%= yeoman.src%>/page1.html',
                    '<%= yeoman.dist%>/page2.html': '<%= yeoman.src%>/page2.html'
                }
            }
        }
    });

    grunt.registerTask('default', [
        'clean',
        'requirejs',
        'copy',
        'targethtml:dist'
    ]);
    grunt.registerTask('dev', [
        'clean',
        'requirejs',
        'copy',
        'targethtml:dev',
        'watch'
    ]);
};
