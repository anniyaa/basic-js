const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  let result = '';
  for (let i=0; i<options.repeatTimes; i++) {
    if (i + 1 === options.repeatTimes) {
      result += `${str}`;
      for (let r=0; r<options.additionRepeatTimes; r++) {
        if (r+1===options.additionRepeatTimes) {
          result += `${options.addition}`
        } else {
          result +=`${options.addition}${options.additionSeparator || '|'}`
        }
      }
      if (!options.additionRepeatTimes) {
        result += `${options.addition || ''}`;
      }
    } else {
      result += `${str}`;
      for (let r=0; r<options.additionRepeatTimes; r++) {
        if (r+1===options.additionRepeatTimes) {
          result += `${options.addition}`
        } else {
          result +=`${options.addition}${options.additionSeparator || '|'}`
        }
      }
      if (!options.additionRepeatTimes) {
        result += `${options.addition || ''}`;
      }
      result += `${options.separator || '+'}`
    }
  }


  return result || `${str}${options.addition}`;
}

module.exports = {
  repeater
};
