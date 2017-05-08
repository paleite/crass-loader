'use strict';

const loader = require('./index.js');
const invalidInput = 'div { background=white; }';
const simpleInput = 'div { background: white; }';
const simpleOutput = 'div{background:#fff}';
const prettyOutput = 'div {\n  background: #fff;\n}\n';
const browserSupportInput = 'a{-moz-border-radius:0;foo:bar}';
const browserSupportOutput = 'a{foo:bar}';
const o1Input = '@-webkit-keyframes foo{0%{a:b}}@keyframes foo{0%{-webkit-transform:a;transform:b}}';
const o1Output ='@-webkit-keyframes foo{0%{a:b}}@keyframes foo{0%{transform:b}}';
const css4Input = 'b{color:rgba(255,255,255,0.5)}';
const css4Output = 'b{color:gray(100%/.5)}';

let globalOutput = [];
console.error = function(message) {
  globalOutput.push(message);
};

let testLoader = function(input, output, options) {
  options = typeof options !== 'undefined' ?  options : {};
  expect(
    loader.call(options, input)
  ).toEqual(output);
};

describe('crass-loader', function() {
  it('should minimize css', function() {
    testLoader(simpleInput, simpleOutput);
  });

  it('should return original css in case of error input', function() {
    testLoader(invalidInput, invalidInput);
  });

  it('should return unoptimized result due to false in optimize in crass options', function() {
    testLoader(
      simpleInput,
      simpleInput, {
        options: {
          crass: {
            optimize: false
          }
        }
      }
    );
  });

  it('should return o1 optimized result due to true in o1 in crass options', function() {
    testLoader(
      o1Input,
      o1Output, {
        options: {
          crass: {
            o1: true
          }
        }
      }
    );
  });

  it('should return prettified result due to true in pretty in crass options', function() {
    testLoader(
      simpleInput,
      prettyOutput, {
        options: {
          crass: {
            pretty: true
          }
        }
      }
    );
  });

  it('should return browser optimized result due to parameters in min in crass options', function() {
    testLoader(
      browserSupportInput,
      browserSupportOutput, {
        options: {
          crass: {
            min: 'ie1,fx5,chr1'
          }
        }
      }
    );
  });

  it('should return optimized css4 result due to true in css4 in crass options', function() {
    testLoader(
      css4Input,
      css4Output, {
        options: {
          crass: {
            css4: true
          }
        }
      }
    );
  });

});
