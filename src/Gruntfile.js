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
                    generateSourceMaps: true,
                    modules: [
                        {
                            name: 'main',
                            exclude: ['jquery', 'underscore']
                        },
                        {name: 'about',
                            exclude: ['jquery']
                        },

                        {
                            name: 'backbone',
                            exclude: ['jquery', 'underscore']
                        },
                        {name: 'jquery'},
//                        {name: 'underscore'}
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
        'requirejs',
        'watch'
    ]);
};
