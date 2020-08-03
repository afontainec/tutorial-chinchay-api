const timezone = require('./accionet/timezone');

/**
 * @param {Iterable | string} arg
 * */
const print = (...arg) => {
  // eslint-disable-next-line no-console
  console.log('DEVELOPER ALERT:', ...arg);
};

/**
 * @param {Promise} promise: promise forced to be resolved
 * @param {boolean?} printAlert: whether alert mail is going to be sent to notify rejection
 * */
const resolveMeAlways = (promise, printAlert) => {
  return new Promise((resolve) => {
    promise.then((result) => {
      resolve(result);
    }).catch((error) => {
      if (printAlert) print('Promise forced to be resolved', error);
      resolve({
        error,
      });
    });
  });
};


module.exports = {
  alert: { print },
  timezone,
  resolveMeAlways,
};
