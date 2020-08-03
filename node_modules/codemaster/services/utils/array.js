const removeElement = (array, element) => {
  const index = array.indexOf(element);
  removeElementAt(array, index);
  return array;
};

const removeElementAt = (array, index) => {
  if (index > -1) array.splice(index, 1);
  return array;
};

const addElement = (array, element, position) => {
  const invalidPosition = (!position && position !== 0);
  if (invalidPosition || !Array.isArray(array)) return array;
  array.splice(position, 0, element);

  return array;
};

const hasElement = (array, element) => {
  if (!Array.isArray(array)) return false;
  const index = array.indexOf(element);
  return (index > -1);
};

const contains = (array, element) => {
  return hasElement(array, element);
};

const includes = (array, element) => {
  return hasElement(array, element);
};

const removeDuplicates = (array) => {
  if (!array) return array;
  const uniques = {};
  for (let i = 0; i < array.length; i++) {
    uniques[array[i]] = true;
  }
  return Object.keys(uniques);
};

const parseString = (text) => {
  text = text || '[]';
  let ans;
  try {
    ans = JSON.parse(text);
  } catch (e) {
    ans = text;
  }
  if (!Array.isArray(ans)) ans = [ans];
  return ans;
};

const hashByProperty = (array, property) => {
  return hashByField(array, property);
};

const hashByKey = (array, key) => {
  return hashByField(array, key);
};

const hashByField = (array, field) => {
  const response = {};
  if (!field) throw new Error('field, property or key should be defined');
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element && !response[element[field]]) response[element[field]] = element;
  }
  return response;
};


module.exports = {
  removeElement,
  removeElementAt,
  removeDuplicates,
  addElement,
  hasElement,
  contains,
  includes,
  parseString,
  hashByField,
  hashByKey,
  hashByProperty,
};
