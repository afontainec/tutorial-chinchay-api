const timezone = require('./accionet/timezone');

const print = (...arg) => {
  // eslint-disable-next-line no-console
  console.log('DEVELOPER ALERT:', ...arg);
};

module.exports = {
  alert: { print },
  timezone,
};
