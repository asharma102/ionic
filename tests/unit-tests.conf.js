// Karma configuration
// Generated on Mon Dec 12 2016 13:18:27 GMT+0530 (IST)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        // files: [
        //     '../www/lib/angular/angular.js',
        //     '../www/lib/ngCordova/dist/ng-cordova.js',
        //     '../www/lib/moment.min.js',
        //     '../www/js/*.js',
        //     '../www/lib/angular-mocks/angular-mocks.js',
        //     'unit-tests/*.js'
        // ],
        files: [
            // all files ending in "_test"
            {pattern: 'unit-tests/*.js', watched: false},
            // each file acts as entry point for the webpack configuration
         ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        // add webpack as preprocessor
            'unit-tests/*.js': ['webpack'],
            'test/**/*_test.js': ['webpack']
        },
        webpack: {
            // karma watches the test entry points
            // (you don't need to specify the entry option)
            // webpack watches dependencies

            // webpack configuration
        },

        webpackMiddleware: {
        // webpack-dev-middleware configuration
        // i. e.
        stats: 'errors-only'
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}