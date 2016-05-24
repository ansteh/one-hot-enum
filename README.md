[![Build Status](https://api.travis-ci.org/ansteh/one-hot-enum.svg?branch=master)](https://travis-ci.org/ansteh/one-hot-enum)
# one-hot-enum
one hot encoding enumerations

## Installation

Using npm:

```js
npm install one-hot-enum
```
In Node.js:

```js
var onehot = require('one-hot-enum');
```

## Usage

```js
let list = ['one', 'two', 'three', 'one', 'three', 'three', 'two'];

let enumaration = onehot.enumaration(list);
let encoded = onehot.encode(list);

console.log(enumaration);
console.log(encoded);
```

## Encoder
Used to generate one hot encoding on the fly.

```js
let encoder = onehot.encoder([]);
_.forEach(list, value => encoder.add(value));
console.log(encoder.getEncoding());
console.log(encoder.getEncodingMap());
```

## License

MIT © [Andre Stehle](https://github.com/ansteh)
