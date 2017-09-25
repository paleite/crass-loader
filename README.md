# crass-loader
[![NPM version](https://img.shields.io/npm/v/crass-loader.svg)](https://www.npmjs.com/package/crass-loader)
[![Build Status](https://img.shields.io/travis/paleite/crass-loader.svg)](https://travis-ci.org/paleite/crass-loader)
[![Dependency Status](https://img.shields.io/gemnasium/paleite/crass-loader.svg)](https://gemnasium.com/paleite/crass-loader)
[![NPM downloads](https://img.shields.io/npm/dm/crass-loader.svg)](https://www.npmjs.com/package/crass-loader)
[![Code Climate](https://codeclimate.com/github/paleite/crass-loader/badges/gpa.svg)](https://codeclimate.com/github/paleite/crass-loader)
[![Test Coverage](https://codeclimate.com/github/paleite/crass-loader/badges/coverage.svg)](https://codeclimate.com/github/paleite/crass-loader/coverage)

[Crass](https://www.npmjs.com/package/crass) loader module for [webpack](https://www.npmjs.com/package/webpack).

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

## Installation

```
npm install crass-loader --save-dev
```

## Examples

Using [crass-loader](https://www.npmjs.com/package/crass-loader) with [css-loader](https://www.npmjs.com/package/css-loader).

``` javascript
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'css-loader',
          'crass-loader'
        ]
      }
    ]
  }
};
```

## Advanced options

### optimize

Default: `true`

`crass` optimizes by default.
Use 'optimize: false' to avoid optimization.

``` javascript
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'css-loader',
          {
            loader: 'crass-loader',
            options: {
              optimize: false
            }
          }
        ]
      }
    ]
  }
};
```

### o1

Default: `false`

`crass` can do O1 optimization, but doesn't do so by default.
Use 'o1: true' to enable.
ATTN: Will only work if 'optimize: true'

``` javascript
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'css-loader',
          {
            loader: 'crass-loader',
            options: {
              o1: true
            }
          }
        ]
      }
    ]
  }
};
```

### pretty

With the `pretty` option Crass will prettify the output.

``` javascript
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'css-loader',
          {
            loader: 'crass-loader',
            options: {
              pretty: true
            }
          }
        ]
      }
    ]
  }
};
```

### saveie

Use the `saveie` option to get Crass to specifically support Internet Explorer 6 and below.

``` javascript
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'css-loader',
          {
            loader: 'crass-loader',
            options: {
              saveie: true
            }
          }
        ]
      }
    ]
  }
};
```

### min

Default: `chr39,fx31,ie11,op26`
Set a comma-separated list of browser versions to instruct Crass to strip CSS that would otherwise only apply to browsers older than the versions listed. For example 'ie9,fx30' would strip CSS that applies only to Firefox 29 and below and Internet Explorer 8 and below. The following prefixes are supported: ie, op, fx, chr

``` javascript
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'css-loader',
          {
            loader: 'crass-loader',
            options: {
              min: 'ie1,fx5,chr1'
            }
          }
        ]
      }
    ]
  }
};
```

### css4

Use the `css4` option to get Crass to allow optimized output to contain CSS4 features and syntax. Note that this may not be supported in all modern browsers.

``` javascript
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'css-loader',
          {
            loader: 'crass-loader',
            options: {
              css4: true
            }
          }
        ]
      }
    ]
  }
};
```

## License

[MIT](http://www.opensource.org/licenses/mit-license.php) © Patrick Eriksson
