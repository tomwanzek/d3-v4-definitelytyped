module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // Housekeeping Tasks --------------------------

        clean: {
            source: ['tests/**/*.js', 'tests/**/*.js.map']
        },

        // Compile Tasks -------------------------------
        ts: {
            compileService: {
                files: [{
                    src: [
                        'tests/**/*.ts'
                    ]
                }],
                options: {
                    module: 'commonjs',
                    target: 'es5',
                    fast: 'never',
                    moduleResolution: 'node',
                    removeComments: false,
                    declaration: false,
                    sourceMap: false,
                    noImplicitAny: true
                }
            }
        }
    });

    // -----------------------------------------------------------------
    // Load Grunt Plugins
    // -----------------------------------------------------------------

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-ts');


    // -----------------------------------------------------------------
    // Transpile from Typescript to target format JS
    // -----------------------------------------------------------------

    grunt.registerTask('compile', ['clean:source', 'ts:compileService']);


};