

class Req {

  constructor() {
    this.headers = {
      'user-agent': 'UA',
      'x-forwarded-for': '10.5.50.1',
    };
    this.secure = false;
    this.authenticated = false;
  }

  isAuthenticated() {
    return this.authenticated;
  }


  login(user) {
    if (!user) return;
    this.authenticated = true;
    this.user = user;
  }

  logout() {
    this.authenticated = false;
    this.user = undefined;
  }

  setParam(key, value) {
    this.params = this.params || {};
    this.params[key] = value;
  }

  setBody(key, value) {
    this.body = this.body || {};
    this.body[key] = value;
  }

  addHeader(key, value) {
    if (!key) return;
    this.headers[key] = value;
  }

  get(key) {
    return this.headers[key];
  }

  setQuery(key, value) {
    this.query = this.query || {};
    this.query[key] = value;
  }

  static generate() {
    return new Req();
  }
}


module.exports = Req;
