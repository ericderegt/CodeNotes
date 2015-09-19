module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-resource/angular-resource.js',
      'node_modules/angular-bootstrap-npm/dist/angular-bootstrap.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/public/js/**/*.js',
      'test/unit/*.js',
      'test/e2e/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : ['karma-phantomjs-launcher',
            'karma-jasmine']

  });
};