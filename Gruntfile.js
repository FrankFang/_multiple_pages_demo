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
            all: {
                files: ['<%= yeoman.src %>/{,*/}*.html','<%= yeoman.src %>/static/js/{,*/}*.js'],
                tasks: [
                    'clean',
                    'requirejs',
                    'copy',
                    'targethtml:dev'
                ]
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
                                'underscore',
                                'backbone'
                            ]
                        },
//                        {
//                            name: 'main',
//                            include: ['models/app.js'],
//                            exclude: ['libs']
//                        },
                        {
                            name: 'page2',
                            include: ['models/about.js'],
                            exclude: ['libs']
                        }
                    ],
                    baseUrl: '<%= yeoman.src%>/static/js',
                    dir: '<%= yeoman.dist%>/static/js/',
                    optimize: 'none',
                    'paths': {
                        'jquery': '../../../bower_components/jquery/jquery.min',
                        'backbone': '../../../bower_components/backbone/backbone-min',
                        'underscore': '../../../bower_components/underscore/underscore',
                        'marionette': '../../../bower_components/backbone.marionette/lib/backbone.marionette',
                        'handlebars':'../../../bower_components/handlebars/handlebars.amd'
                    },
                    'shim': {
                        backbone: {
                            deps: ['underscore', 'jquery'],
                            exports: 'Backbone'
                        },
                        underscore: {
                            exports: '_'
                        },
                        'backbone.marionette': {
                            deps: ['jquery', 'underscore', 'backbone'],
                            exports: 'Marionette'
                        }
                    }
                }
            }
        },
        targethtml: {
            dist: {
                files: {
                    '<%= yeoman.dist%>/app.html': '<%= yeoman.src%>/app.html',
                    '<%= yeoman.dist%>/page2.html': '<%= yeoman.src%>/page2.html'
                }
            },
            dev: {
                options: {
                    curlyTags: {
                        timestamp: '<%= grunt.template.today("yyyymmddHHMMss") %>'
                    }
                },
                files: {
                    '<%= yeoman.dist%>/app.html': '<%= yeoman.src%>/app.html',
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
        'targethtml:dist',
        'watch'
    ]);
};
