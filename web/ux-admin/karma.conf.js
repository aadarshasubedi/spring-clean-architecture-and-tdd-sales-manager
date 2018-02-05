// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      //require('karma-phantomjs-launcher'),
      require('karma-electron-launcher'),
      //require('karma-chrome-launcher'),
      require('karma-mocha-reporter'),
      require('karma-remap-istanbul'),

      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: [
      // 'progress', 'kjhtml',
      'mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
      //'PhantomJS'
      //'Electron',
      //'Chrome',
      //'ChromeHeadless',
      'ElectronDebugging',
      //'PhantomJSDebugging'
    ],
    customLaunchers: {
      ElectronDebugging: {
        base: 'Electron',
        flags: [
          '--show',
          '--remote-debugging-port=9333'
        ]
      },
      PhantomJSDebugging: {
        base: 'PhantomJS',
        debug: true
      }
    },
    singleRun: false
  });
};
