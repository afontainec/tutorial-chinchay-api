const fs = require('fs');


const compileString = (string, values) => {
  if (!string) return string;
  values = values || {};
  const keys = Object.keys(values);
  for (let i = 0; i < keys.length; i++) {
    const inTextKey = '\\$' + keys[i] + '\\$'; // eslint-disable-line
    const search = new RegExp(inTextKey, 'g');
    string = string.replace(search, values[keys[i]]);
  }
  return string;
};

const compileFile = (filePath, values) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(compileString(data, values));
    });
  });
};


exports.compile = compileString;
exports.compileFile = compileFile;
