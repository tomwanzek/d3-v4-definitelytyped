module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // Housekeeping Tasks --------------------------

        clean: {
            source: ['tests/**/*.js', 'tests/**/*.js.map']
        },
        // Linting Tasks -------------------------------
        tslint: {
            options: {
                configuration: 'tslint.json'
            },
            files: {
                src: [
                    'tests/**/*.ts',
                    'src/**/*.d.ts'
                ]
            }
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
    grunt.loadNpmTasks('grunt-tslint');

    // -----------------------------------------------------------------
    // Transpile from Typescript to target format JS
    // -----------------------------------------------------------------

    grunt.registerTask('compile', ['clean:source', 'ts:compileService', 'tslint']);


};