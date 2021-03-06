
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.initConfig({
    clean: {
      css: ['css/*'],
      build: ['build']
    },
    copy: {
      build: {
        src: ['css/**', 'index.html', 'fonts/**', 'img/**' ],
        dest: 'build/'
      },
      deploy: {
        cwd: 'build',
        src: '**',
        dest: '../spain-survey-ghpages/'
      }
    },
    less: {
      dev: {
        src: 'less/style.less',
        dest: 'css/style.css'
      },
      build: {
        src: 'less/style.less',
        dest: 'css/style.css',
        options: {
          yuicompress: true
        }
      }
    },
    watch: {
      less: {
        files: [ 'less/**/*.less', 'index.html', 'js/*.js' ],
        tasks: [ 'compile' ],
        options: {
          livereload: true
        }
      }
    },
    connect: {
      dev: {
        options: {
          port: 3000,
          hostname: '*'
        }
      },
      build: {
        options: {
          port: 3003,
          hostname: '*',
          base: 'build/',
          keepalive: true
        }
      }
    },
    uglify: {
      build: {
        src: 'js/script.js' ,
        dest: 'build/js/script.js' ,
      }
    }

  });

  grunt.registerTask('compile', ['clean:css', 'less:dev', 'copy:css', 'concat:dev']);
  grunt.registerTask('default', ['connect:dev', 'watch']);
  grunt.registerTask('build',
    ['clean:build', 'less:build', 'copy:build', 'uglify'/*, 'connect:build'*/]);
  grunt.registerTask('deploy',
    [ 'build', 'copy:deploy']);

}