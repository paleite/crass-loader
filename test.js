const loader = require(`./index.js`)
const invalidInput = `div { background=white; }`
const simpleInput = `div { background: white; }`
const simpleOutput = `div{background:#fff}`
const prettyOutput = `div {\n  background: #fff;\n}\n`
const saveieInput = `a{foo:bar\\9}`
const saveieOutput = `a{foo:bar\\9}`
const browserSupportInput = `a{-moz-border-radius:0;foo:bar}`
const browserSupportOutput = `a{foo:bar}`
const o1Input = `@-webkit-keyframes foo{0%{a:b}}@keyframes foo{0%{-webkit-transform:a;transform:b}}`
const o1Output = `@-webkit-keyframes foo{0%{a:b}}@keyframes foo{0%{transform:b}}`
const css4Input = `b{color:rgba(255,255,255,0.5)}`
const css4Output = `b{color:gray(100%/.5)}`

let globalOutput = []
console.error = function (message) {
  globalOutput.push(message)
}

let testLoader = function (input, output, options) {
  options = typeof options !== `undefined` ? options : {}
  expect(loader.call(options, input)).toEqual(output)
}

describe(`crass-loader`, () => {
  it(`should minimize css`, () => {
    testLoader(simpleInput, simpleOutput)
  })

  it(`should return original css in case of error input`, () => {
    testLoader(invalidInput, invalidInput)
  })

  it(`should return unoptimized result due to false in optimize in crass options`, () => {
    testLoader(simpleInput, simpleInput, {
      query: {
        optimize: false
      }
    })
  })

  it(`should return o1 optimized result due to true in o1 in crass options`, () => {
    testLoader(o1Input, o1Output, {
      query: {
        o1: true
      }
    })
  })

  it(`should return prettified result due to true in pretty in crass options`, () => {
    testLoader(simpleInput, prettyOutput, {
      query: {
        pretty: true
      }
    })
  })

  it(`should return ie6 features due to true in saveie in crass options`, () => {
    testLoader(saveieInput, saveieOutput, {
      query: {
        saveie: true
      }
    })
  })

  it(`should return browser optimized result due to parameters in min in crass options`, () => {
    testLoader(browserSupportInput, browserSupportOutput, {
      query: {
        min: `ie1,fx5,chr1`
      }
    })
  })

  it(`should return optimized css4 result due to true in css4 in crass options`, () => {
    testLoader(css4Input, css4Output, {
      query: {
        css4: true
      }
    })
  })
})
