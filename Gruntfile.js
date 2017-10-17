'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      build: {
        cwd: 'src',
        src: [ '**' ],
        dest: 'public',
        expand: true
      },
    },
    clean: {
      build: {
        src: [ 'public' ]
      },
    },
    jshint: {
      all: [
        '*.js',
        'src/js/bucketlist.js'
      ],
      options: {
        browser: true,
        jquery: true,
        node: true,
        camelcase: true,
        eqeqeq: true,
        eqnull: true,
        indent: 2,
        latedef: true,
        newcap: true,
        quotmark: 'single',
        trailing: true,
        undef: true,
        unused: true,
        maxlen: 80
      }
    },
    uglify: {
      build: {
        files: [{
          expand: true,
          src: '**/*.js',
          cwd: 'src/js/',
          dest: 'public/js/'
        }]
      }
    },
    cssmin: {
      build: {
        files: [{
          expand: true,
          src: '**/*.css',
          cwd: 'src/css/',
          dest: 'public/css/'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('test', 'jshint');

  grunt.registerTask('minify', [
    'uglify:build',
    'cssmin:build',
  ]);

  grunt.registerTask('build', [
    'clean',
    'copy',
    'test',
    'minify',
  ]);

  grunt.registerTask('default', ['build']);
};
