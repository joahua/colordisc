# 🎨 colordisc [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Canvas-based color picker for modern browsers

## Install

```sh
$ npm install --save colordisc
```


## Usage

```html
<canvas id="Rainbow"></canvas>
```

```js
var colordisc = require('colordisc');

colordisc('Rainbow');

// or, use querySelector however you’d like:

colordisc('canvas#Rainbow');
```

## License

MIT © [Josh Street](http://josh.st)


[npm-image]: https://badge.fury.io/js/colordisc.svg
[npm-url]: https://npmjs.org/package/colordisc
[travis-image]: https://travis-ci.org/joahua/colordisc.svg?branch=master
[travis-url]: https://travis-ci.org/joahua/colordisc
[daviddm-image]: https://david-dm.org/joahua/colordisc.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/joahua/colordisc
[coveralls-image]: https://coveralls.io/repos/joahua/colordisc/badge.svg
[coveralls-url]: https://coveralls.io/r/joahua/colordisc
