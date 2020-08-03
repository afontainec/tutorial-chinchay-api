
const cookies = {};

const get = (key) => {
  const entry = cookies[key];
  if (!entry) return undefined;
  const hasExpiration = entry.options && entry.options.expires;
  if (hasExpiration) {
    const expires = new Date(entry.options.expires).getTime();
    const now = new Date().getTime();
    if (expires < now) {
      delete cookies[key];
      return undefined;
    }
  }
  return entry.value;
};


const put = (key, value, options) => {
  const entry = {
    value,
    options,
  };
  cookies[key] = entry;
};

const remove = (key) => {
  delete cookies[key];
};


module.exports = {
  get,
  put,
  remove,
};
