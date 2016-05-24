'use strict';
const _ = require('lodash');

const getEnumaration = (list) => {
  return _.uniq(list);
};

const encode = (list, enumaration) => {
  if(_.isUndefined(enumaration)) enumaration = getEnumaration(list);
  let eye = _.chain(enumaration).clone().fill(0).value();
  return _.map(list, (item) => {
    let index = _.findIndex(enumaration, value => value === item);
    return _.chain(eye).clone().set(index, 1).value();
  });
};

const getValue = (enumaration, encoded) => {
  let index = _.findIndex(encoded, value => value === 1);
  if(index > -1) return enumaration[index];
};

const Encoder = (list) => {
  if(_.isUndefined(list)) list = [];
  
  let stack = _.clone(list);
  let enumaration = getEnumaration(stack);
  let encodedList = encode(stack, enumaration);

  return {
    add: (item) => {
      stack.push(item);
      if(_.includes(enumaration, item) === false){
        enumaration.push(item);
        _.forEach(encodedList, (encoded) => {
          encoded.push(0);
        });
      }
      encodedList.push(_.first(encode([item], enumaration)));
    },
    getEncoding: () => {
      return encodedList;
    },
    getEncodingMap: () => {
      return _.zip(stack, encodedList);
    }
  };
};

module.exports = {
  encode: encode,
  enumaration: getEnumaration,
  value: getValue,
  encoder: Encoder
};
