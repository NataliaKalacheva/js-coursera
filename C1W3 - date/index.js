/**
 * @param {String} date
 * @returns {Object}
 */

module.exports = function date(date) {
  var originalDate = new Date(date);
  originalDate.setMinutes(
    originalDate.getMinutes() + Math.abs(originalDate.getTimezoneOffset())
  );
  var properties = ["years", "months", "days", "hours", "minutes"];
  var time = {
    date: originalDate,
    add: function(number, property) {
      if (number < 0) throw new TypeError();
      if (!properties.includes(property)) throw new TypeError();

      if (property === "years") {
        this.date.setFullYear(this.date.getFullYear() + number);
      }
      if (property === "months") {
        this.date.setMonth(this.date.getMonth() + number);
      }
      if (property === "days") {
        this.date.setDate(this.date.getDate() + number);
      }

      if (property === "hours") {
        this.date.setHours(this.date.getHours() + number);
      }
      if (property === "minutes") {
        this.date.setMinutes(this.date.getMinutes() + number);
      }
      return this;
    },
    subtract: function(number, property) {
      if (number < 0) throw new TypeError();
      if (!properties.includes(property)) throw new TypeError();

      if (property === "years") {
        this.date.setFullYear(this.date.getFullYear() - number);
      }
      if (property === "months") {
        this.date.setMonth(this.date.getMonth() - number);
      }
      if (property === "days") {
        this.date.setDate(this.date.getDate() - number);
      }

      if (property === "hours") {
        this.date.setHours(this.date.getHours() - number);
      }
      if (property === "minutes") {
        this.date.setMinutes(this.date.getMinutes() - number);
      }
      return this;
    },
    get value() {
      return this.date
        .toISOString()
        .slice(0, 16)
        .replace("T", " ");
    }
  };
  return time;
};
