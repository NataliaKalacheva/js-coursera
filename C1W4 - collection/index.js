/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection, foo1, foo2) {
  var copyCollection = copy(collection);

  if (arguments.length === 1) {
    return copyCollection;
  }

  for (var i = 1; i < arguments.length; i++) {
    if (arguments[i].name === "filter") {
      copyCollection = arguments[i](copyCollection);
    }
  }
  for (var q = 1; q < arguments.length; q++) {
    if (arguments[q].name === "select") {
      copyCollection = arguments[q](copyCollection);
    }
  }

  return copyCollection;
}

/**
 * @params {String[]}
 */
function select() {
  var properties = [].slice.call(arguments);

  return function select(collection) {
    var keysForDelete = findOdd(Object.keys(collection[0]), properties);
    for (var i = 0; i < collection.length; i++) {
      for (var q = 0; q < keysForDelete.length; q++) {
        delete collection[i][keysForDelete[q]];
      }
    }
    return collection;
  };
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
  return function filter(collection) {
    var arr = [];
    for (var i = 0; i < collection.length; i++) {
      if (values.includes(collection[i][property])) {
        arr.push(collection[i]);
      }
    }

    return arr;
  };
}

function copy(collection) {
  // глубокое копирование
  var arr = [];
  for (var i = 0; i < collection.length; i++) {
    var copy = Object.assign({}, collection[i]);
    arr.push(copy);
  }
  return arr;
}

function findOdd(keys, properties) {
  var odd = [];

  for (var i = 0; i < keys.length; i++) {
    if (!properties.includes(keys[i])) {
      odd.push(keys[i]);
    }
  }
  return odd;
}

module.exports = {
  query: query,
  select: select,
  filterIn: filterIn
};
