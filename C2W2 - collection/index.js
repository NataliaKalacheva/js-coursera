module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
  this.collection = [];
}

// Методы коллекции
Collection.prototype.count = function() {
  return this.collection.length;
};

Collection.prototype.values = function() {
  return this.collection;
};

Collection.prototype.append = function(el) {
  if (Array.isArray(el)) {
    this.collection = this.collection.concat(el);
    return;
  }
  if (el instanceof Collection) {
    this.collection = this.collection.concat(el.collection);
    return;
  } else {
    this.collection.push(el);
    return;
  }
};

Collection.prototype.at = function(num) {
  if (num <= 0 || num > this.collection.length) return null;
  return this.collection[num - 1];
};

Collection.prototype.removeAt = function(num) {
  if (num <= 0 || num > this.collection.length) return false;
  this.collection.splice(num - 1, 1);
  return true;
};

// другие методы

/**
 * Создание коллекции из массива значений
 */

Collection.from = function(arr) {
  let obj = new Collection();
  obj.collection = arr;
  return obj;
};
