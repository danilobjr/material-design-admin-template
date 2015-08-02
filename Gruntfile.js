module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            sass: {
                files: ['css/**/*.{scss,sass}'],
                tasks: ['sass:dev']
            }
        },
        sass: {
            options: {
                outputStyle: 'expanded'
            },
            dev: {
                files: {
                    'css/style.css': 'css/main.{sass,scss}'
                }
            }
        }
    });

    grunt.registerTask('default', ['sass:dev', 'watch']);

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
