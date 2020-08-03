
class Res {

  constructor() {
    this.HEADERS = {};
  }

  render(path, attr) {
    this.renderingPath = path;
    this.renderingAttr = attr;
  }

  send(input) {
    this.sendingFile = input;
    this.sending = input;
  }

  status(statusToSend) {
    this.statusToSend = statusToSend;
    return this;
  }

  sendFile(file) {
    this.sendingFile = file;
  }

  json(key, json) {
    this.sendingJSON = json;
    this.sending = json;
    this.jsonKey = key;
  }

  redirect(path) {
    this.redirectingTo = path;
  }

  header(key, value) {
    this.HEADERS[key] = value;
  }

  getHeader(key) {
    return this.HEADERS[key];
  }

  static generate() {
    return new Res();
  }
}


module.exports = Res;
