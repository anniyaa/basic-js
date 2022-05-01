const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date ) {
  let someDate = new Date(date);

  if (date === undefined) {
    return 'Unable to determine the time of year!';
  } else if (!(someDate.getDate())) {
    throw new TypeError("Invalid date!");
  } else if (typeof date === 'number') {
    throw new TypeError("Invalid date!");
  } else if (date[Symbol.toStringTag] === 'Date') {
    throw new TypeError("Invalid date!");
  }

  if (someDate.getMonth() === 11 || someDate.getMonth() === 0 || someDate.getMonth() === 1) {
    return 'winter';
  } else if (someDate.getMonth() === 2 || someDate.getMonth() === 3 || someDate.getMonth() === 4) {
    return 'spring';
  } else if (someDate.getMonth() === 5 || someDate.getMonth() === 6 || someDate.getMonth() === 7) {
    return 'summer';
  } else if (someDate.getMonth() === 8 || someDate.getMonth() === 9 || someDate.getMonth() === 10) {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
