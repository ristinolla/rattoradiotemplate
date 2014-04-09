module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        // the files to concatenate
        src: ['src/js/hide_seek_nav.js', 'src/js/rattoradio.js'],
        // the location of the resulting JS file
        dest: 'build/js/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
       // banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
        dist: {
          files: {
            'build/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
          }
        }
    },
    
    cssmin: {
      minify: {
        expand: true,
        cwd: 'build/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'build/css/',
        ext: '.min.css'
      }
    },

    jade: {
      compile: {
        options: {
          pretty: true
        },
        data: {
          pluginVersion: '<%= pkg.version %>'
        },
        files: {
          'build/index.html' : 'src/index.jade'
        }

      } 
    }


  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jade');

  // Default task(s).
  grunt.registerTask('default', ['concat','uglify','jade']);

};