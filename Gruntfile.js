module.exports = function(grunt) {

// next line is for the FTP task
//require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: [	
				// jquery and data need to come first, then start-screen and init need to come last, the middle shouldn't matter as much
				'includes/js/jquery.min.js',
        'includes/js/quick-demo.js',
        'includes/js/data.js', 
				'includes/js/localstorage.js', 
				'includes/js/flashcards.js', 
				'includes/js/all-subjects.js', 
				'includes/js/search.js', 
				'includes/js/start-screen.js', 
				'includes/js/init.js',
			],
        dest: 'includes/build/scripts.js'
      }
    },
      
    sass:{
      dist: {
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'includes/build/styles.css': 'includes/css/styles.scss'       // 'destination': 'source'
          //'widgets.css': 'widgets.scss' // just keep adding lines here for multiple files
        }
      }
    },
	watch: {
		sass: {
			files: 'includes/css/*.scss',
			tasks: ['sass'],
		},
		uglify: {
			files: 'includes/js/*.js',
			tasks: ['uglify'],
		},
	},
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Default task(s).
  grunt.registerTask('default', ['uglify','sass', 'watch']);

};