/**
 * @param {Number} a Первое слагаемое
 * @param {Number} b Второе слагаемое
 * @returns {Number}
 */
module.exports = function (a, b) {

    var parsedA = parseInt(a, 10);
    var parsedB = parseInt(a, 10);    
    if (isNaN(parsedA) || isNaN(parsedB)) { 
        return NaN 
    } 
    else { 
        return Number(a) + Number(b)
    }
};
