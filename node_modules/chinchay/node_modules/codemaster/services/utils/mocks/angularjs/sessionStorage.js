

class SessionStorage {

  constructor() {
    this.SESSION_STORAGE_DATA = {};
  }

  getItem(key) {
    return this.SESSION_STORAGE_DATA[key];
  }

  setItem(key, value) {
    this.SESSION_STORAGE_DATA[key] = value;
  }

  clear() {
    this.SESSION_STORAGE_DATA = {};
  }
}

module.exports = SessionStorage;
