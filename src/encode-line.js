const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let avg = '';

  for (let i=0; i<str.length; i++) {
    if (str[i]===str[i+1]) {
      avg+=str[i];
    } else {
      avg+=str[i];
      result+=`${avg.length===1?'':avg.length}${str[i]}`;
      avg = '';
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
