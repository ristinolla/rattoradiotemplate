module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      scripts: {
        // the files to concatenate
        src: ['src/js/hide_seek_nav.js',
        'src/js/rattoradio.js'],
        dest: 'build/js/<%= pkg.name %>.js'
      },
      libs: {
        src: ['bower_components/jquery/dist/jquery.js', 
        'bower_components/jquery-cycle2/build/jquery.cycle2.js', 
        'bower_components/jquery-cycle2/build/plugin/jquery.cycle2.carousel.min.js', 
        'bower_components/bootstrap/dist/js/bootstrap.js', 
        'bower_components/retina.js/dist/retina.js'],
        dest: 'build/js/<%= pkg.name %>.libs.js'
      }
    },

    less: {
      development: {
        files: {
          "build/css/<%= pkg.name %>.css": "src/less/main.less",
        }
      }
      /*
      production: {
        options: {
          paths: ["assets/css"],
          cleancss: true,
          modifyVars: {
            imgPath: '"http://mycdn.com/path/to/images"',
          bgColor: 'red'
          }
        },
        files: {
          "path/to/result.css": "path/to/source.less"
        }
      }
      */
    },

    uglify: {
      options: {
       // banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
        dist: {
          files: {
            'build/js/<%= pkg.name %>.min.js': ['<%= concat.scripts.dest %>'],
            'build/js/<%= pkg.name %>.libs.js': ['<%= concat.libs.dest %>']
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
          'build/index.html' : 'src/index.jade',
          'build/alasivu.html' : 'src/alasivu.jade',
          'build/ohjelmat.html' : 'src/ohjelmat.jade',
          'build/ohjelmakartta.html' : 'src/ohjelmakartta.jade',
          'build/components/head.html' :  'src/includes/head.jade',
          'build/components/main-container.html' : 'src/includes/main-container.jade',
          'build/components/main-nav.html' : 'src/includes/main-nav.jade',
          'build/components/social-container.html' : 'src/includes/social-container.jade',
          'build/components/jumbotron.html' : 'src/includes/jumbotron.jade'
        }

      } 
    },

    watch: {
      styles: {
        // Which files to watch (all .less files recursively in the less directory)
        files: ['src/less/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      },
      scripts: {
        files: ['src/js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        },
      },
      jade: {
        files: 'src/**/*.jade',
        tasks: ['jade:compile']
      }    
    }


  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Default task(s).
  grunt.registerTask('default', ['concat','uglify','jade','watch']);

};