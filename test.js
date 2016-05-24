'use strict';
const _ = require('lodash');
const onehot = require('./index.js');

let list = ['one', 'two', 'three', 'one', 'three', 'three', 'two'];

let enumaration = onehot.enumaration(list);
let encoded = onehot.encode(list);

console.log(enumaration);
console.log(encoded);

console.log(onehot.value(enumaration, _.last(encoded)));

//encoder
let encoder = onehot.encoder();
_.forEach(list, value => encoder.add(value));
console.log(encoder.getEncoding());
console.log(encoder.getEncodingMap());
