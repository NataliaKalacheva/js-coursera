/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function(hours, minutes, interval) {
  minutes = minutes + interval;
  addedHours = Math.floor(minutes / 60);
  minutes = minutes - addedHours * 60;

  hours = hours + addedHours;
  addedDays = Math.floor(hours / 24);
  hours = hours - addedDays * 24;

  result =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0");
  return result;
};
