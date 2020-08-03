const removeElement = (array, element) => {
  const index = array.indexOf(element);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};

const hasElement = (array, element) => {
  const index = array.indexOf(element);
  return (index > -1);
};

const contains = (array, element) => {
  return hasElement(array, element);
};

module.exports = {
  removeElement,
  hasElement,
  contains,
};
