function Collection() {
  this.collection = [];
}

Collection.from = function(arr) {
  let obj = new Collection();
  obj.collection = arr;
  return obj;
};

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
var collection = new Collection();

var collection2 = Collection.from(["a", "b", "c"]);

collection.append("vasya");
collection2.append("d");
collection2.append(["a", "b", "c"]);
