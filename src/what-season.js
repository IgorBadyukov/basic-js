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
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  try {
    if (date.hasOwnProperty('getMonth')) {
      throw new Error();
    }
    if (date.getMonth() + 1 >= 3 && date.getMonth() + 1 <= 5) {
      return 'spring';
    }
    else if (date.getMonth() + 1 >= 6 && date.getMonth() + 1 <= 8) {
      return 'summer';
    }
    else if (date.getMonth() + 1 >= 9 && date.getMonth() + 1 <= 11) {
      return 'autumn';
    }
    else {
      return 'winter'
    }
  } catch (error) {
    throw new Error('Invalid date!');
  }
}
module.exports = {
  getSeason
};
