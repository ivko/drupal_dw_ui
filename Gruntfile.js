module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            configFiles: {
                files: [ 'Gruntfile.js' ],
                options: {
                    reload: true
                }
            },
            module: {
                files: ['**/*.yml', '**/*.php', '**/*.module', '!**/node_modules/**'],
                tasks: ['exec:router_rebuild']
            },
            templates: {
                files: ['**/*.twig', '!**/node_modules/**'],
                tasks: ['exec:cache_rebuild']
            },
        },
        exec: {
            router_rebuild: {
                command: 'C:\\bin\\drupal.bat router:rebuild',
            },
            cache_rebuild: {
                command: 'C:\\bin\\drupal.bat cr all',
            },
        }
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

};