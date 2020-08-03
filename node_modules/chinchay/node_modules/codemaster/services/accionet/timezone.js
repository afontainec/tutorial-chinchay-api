// const requestify = require('requestify');
const moment = require('moment-timezone');

const INTERVAL = 24 * 60 * 60 * 1000; // One Day
let updatedAt = new Date();
let previousUpdate = null;
const timezone = {};
const SUPPORTED_TIMEZONES = ['America/Santiago', 'America/Montevideo', 'America/Mexico_City', 'America/Asuncion'];
const LOCATION = '-33.4876785,-70.78158'; // corresponds to Santiago, Chile

const CITIES = {
  Santiago: 'America/Santiago',
  Montevideo: 'America/Montevideo',
  'Ciudad de México': 'America/Mexico_City',
  Asunción: 'America/Asuncion',
};

function set() {
  updateTimezone();
  setInterval(updateTimezone, INTERVAL);
}

function updateTimezone() {
  setTimezones();
  previousUpdate = new Date(updatedAt);
  updatedAt = new Date();
}


const setTimezones = () => {
  for (let i = 0; i < SUPPORTED_TIMEZONES.length; i++) {
    const tz = SUPPORTED_TIMEZONES[i];
    const offset = moment.tz(tz).utcOffset() / 60;
    timezone[tz] = timezoneString(offset);
  }
  return timezone;
};


function timezoneString(offset) {
  offset *= -1;
  offset = Number.isNaN(offset) ? 0 : offset;
  let t = offset <= 0 ? '-' : '+';
  offset = Math.abs(offset);
  t += offset > 10 ? offset : `0${offset}`;
  return t;
}

function status() {
  return {
    updatedAt,
    previousUpdate,
    timezone,
    INTERVAL,
    LOCATION,
  };
}

// function getOffset() {
//   return Promise.resolve(offset);
// }


function getTimezone(city) {
  if (notInitialized()) set();
  const tz = CITIES[city] || CITIES.Santiago;
  return timezone[tz];
}

const notInitialized = () => {
  return Object.keys(timezone).length === 0;
};

const clearTimezone = () => {
  const keys = Object.keys(timezone);
  keys.forEach((element) => {
    delete timezone[element];
  });
};

const publicMethod = {
  set,
  status,
  getTimezone,
};

if (process.env.NODE_ENV === 'test') {
  publicMethod.timezoneString = timezoneString;
  publicMethod.clearTimezone = clearTimezone;
  publicMethod.notInitialized = notInitialized;
  // publicMethod.getOffset = getOffset;
  publicMethod.updateTimezone = updateTimezone;

}

module.exports = publicMethod;
