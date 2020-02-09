/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function(operations, callback) {
  var arrWithPromises = [];

  function doFunction(operation) {
    return new Promise(function(resolve, reject) {
      operation(function(error, data) {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }

  for (var i = 0; i < operations.length; i++) {
    var promise = doFunction(operations[i]);
    arrWithPromises.push(promise);
  }

  Promise.all(arrWithPromises)
    .then(function(data) {
      callback(null, data);
    })
    .catch(function(error) {
      callback(error);
    });
};
