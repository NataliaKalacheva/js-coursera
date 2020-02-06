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
    console.log(this.collection);
    this.collection = this.collection.concat(el);
  } else {
    this.collection.push(el);
  }
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
