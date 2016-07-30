module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

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
                    target: 'es6',
                    noImplicitAny: true,
                    strictNullChecks: false,
                    noEmit: true,
                    forceConsistentCasingInFileNames: true
                }
            }
        }
    });

    // -----------------------------------------------------------------
    // Load Grunt Plugins
    // -----------------------------------------------------------------

    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-tslint');

    // -----------------------------------------------------------------
    // Transpile from Typescript to target format JS
    // -----------------------------------------------------------------

    grunt.registerTask('compile', ['ts:compileService', 'tslint']);


};
