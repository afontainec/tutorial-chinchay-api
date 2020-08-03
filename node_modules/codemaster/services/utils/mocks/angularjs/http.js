const requestify = require('requestify');

let host = '';

const setHost = (input) => {
  host = input;
};

const parseUrl = (url) => {
  return url && url.startsWith('/') ? host + url : url;
};

const get = async (url, config) => {
  url = parseUrl(url);
  const response = await fetchRequest(requestify.get(url, config));
  const data = response.getBody();
  return { data };
};

const post = async (url, body) => {
  url = parseUrl(url);
  const response = await fetchRequest(requestify.post(url, body));
  const data = response.getBody();
  return { data };
};

const put = async (url, body) => {
  url = parseUrl(url);
  const response = await fetchRequest(requestify.put(url, body));
  const data = response.getBody();
  return { data };
};

const fetchRequest = (request) => {
  return new Promise((resolve, reject) => {
    request.then((result) => {
      resolve(result);
    }).catch((err) => {
      err.status = err.code;
      err.data = err.getBody();
      reject(err);
    });
  });
};


module.exports = {
  setHost,
  parseUrl,
  get,
  post,
  put,
  fetchRequest,
};
