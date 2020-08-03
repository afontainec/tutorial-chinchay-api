// server/services/utils.js
const Date = require('./utils/date');
const ArrayCM = require('./utils/array');
const db = require('./utils/db');
const promise = require('./utils/promise');
const req = require('./utils/mocks/req');
const res = require('./utils/mocks/res');
const $http = require('./utils/mocks/angularjs/http');
const $cookies = require('./utils/mocks/angularjs/$cookies');
const $window = require('./utils/mocks/angularjs/$window');

function isJson(x) {
  // check if its null
  if (!x || Array.isArray(x)) return false;
  return (typeof x) === 'object';
}

exports.isJSON = isJson;

exports.isEmptyJSON = (x) => {
  // if it is not a json then it is not an empty json
  if (!isJson(x)) {
    return false;
  }
  return Object.keys(x).length === 0;
};

exports.cloneObject = (obj) => {
  if (obj === null || typeof obj !== 'object') return obj;
  let copy;
  try {
    copy = obj.constructor();
  } catch (err) {
    copy = {};
  }
  // eslint-disable-next-line
  for (const attr in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, attr)) {
      copy[attr] = this.cloneObject(obj[attr]);
    }
  }
  return copy;
};

exports.concatUnique = (a, b) => {
  let d = a.concat(b);
  const set = new Set(d);
  d = Array.from(set);
  return d;
};

exports.cloneJSON = (json) => {
  if (!json && typeof obj !== 'object') return json;
  return JSON.parse(JSON.stringify(json));
};

function randomInteger(min, max) {
  return min + Math.floor(Math.random() * ((max + 1) - min));
}


exports.randomInteger = randomInteger;

exports.randomEntry = (array) => {
  const randomIndex = randomInteger(0, array.length - 1);
  return array[randomIndex];
};

exports.promisesAll = (array, func) => {
  const promises = [];
  for (let i = 0; i < array.length; i++) {
    promises.push(func(array[i]));
  }
  return Promise.all(promises);
};

exports.wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

const isDefined = (elem) => {
  return !isNullorUndefined(elem);
};

const isNullorUndefined = (elem) => {
  return elem === undefined || elem === null;
};

exports.queryToHttpString = (query) => {
  let str = '?';
  const keys = Object.keys(query);
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    const value = query[k];
    str += `${k}=${value}&`;
  }
  str = str.slice(0, -1); // remove last one
  return str;
};

const deepEqual = (x, y) => {
  // code modified from https://stackoverflow.com/questions/25456013/javascript-deepequal-comparison/25456134#:~:text=Write%20a%20function%2C%20deepEqual%2C%20that,a%20recursive%20call%20to%20deepEqual.
  if (x === y) {
    return true;
  }
  if ((typeof x === 'object' && x != null) && (typeof y === 'object' && y != null)) {
    if (Object.keys(x).length !== Object.keys(y).length) return false;
    const keys = Object.keys(x);
    for (let i = 0; i < keys.length; i++) {
      const prop = keys[i];
      if (Object.prototype.hasOwnProperty.call(y, prop)) {
        if (!deepEqual(x[prop], y[prop])) return false;
      } else return false;
    }

    return true;
  }
  return false;
};

exports.deepEqual = deepEqual;

const mocks = {
  express: {
    req,
    res,
  },
  angular: {
    $http,
    $cookies,
    $window,
  },
};

exports.isDefined = isDefined;
exports.isNullorUndefined = isNullorUndefined;
exports.Date = Date;
exports.Array = ArrayCM;
exports.db = db;
exports.mocks = mocks;
exports.Promise = promise;
