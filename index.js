'use strict';

var crass = require('crass');
var browser_support = require('crass/dist/browser_support');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
  var crassOptions = loaderUtils.getOptions(this);
  var options = {
    optimize: true
  };
  var result;

  if (this.cacheable) {
    this.cacheable();
  }

  if (typeof crassOptions === 'object') {
    if (typeof crassOptions.optimize === 'boolean') {
      options.optimize = crassOptions.optimize;
    }
    if (typeof crassOptions.o1 === 'boolean') {
      options.o1 = crassOptions.o1;
    }
    if (typeof crassOptions.pretty === 'boolean') {
      options.pretty = crassOptions.pretty;
    }
    if (typeof crassOptions.saveie === 'boolean') {
      options.saveie = crassOptions.saveie;
    }
    if ('min' in crassOptions) {
      var minPlatsUnparsed = crassOptions.min.split(',');
      if (minPlatsUnparsed.length) {
        var minPlats = minPlatsUnparsed.map(browser_support.parseBrowser);
        options.browser_min = {};
        minPlats.forEach(function(plat) {
          options.browser_min[plat.browser] = plat.version;
        });
      }
    } else {
      options.browser_min = {
        chrome: 39,
        firefox: 31,
        ie: 11,
        opera: 26,
      };
    }

    if (typeof crassOptions.css4 === 'boolean') {
      options.css4 = crassOptions.css4;
    }
  }

  if (options.optimize) {
    try {
      result = crass.parse(source).optimize(options);
    } catch (error) {
      result = null;
    }
  }

  if (result) {
    if (options.pretty) {
      return result.pretty();
    } else {
      return result.toString();
    }
  }

  return source;
};
