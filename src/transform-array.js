const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr ) {

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const discard_prev = '--discard-prev';
  const discard_next = '--discard-next';
  const double_prev = '--double-prev';
  const double_next = '--double-next';

  let result = [];

  for (i=0;i<arr.length;i++) {
    switch (arr[i]) {
      case double_prev:
        if (arr[i-1]) {
          result.push(result[result.length-1]);
          result.push(result[result.length-1])
          result.pop()
          break;
        } else {break;}
      case double_next:
        if (arr[i+1]) {
          result.push(arr[i+1]);
          result.push(arr[i+1]);
          result.pop()
          break;
        } else {break;}
      case discard_prev:
        if (arr[i-1]) {
          result.pop()
          result.push('deleted')
          break
        } else {break;}
      case discard_next:
        result.push('deleted')
        i++;
        break
      default: result.push(arr[i]);
    }
  }

  return result.filter(el=>{
    if(el!=='deleted'){
      return el;
    }
  })
}

module.exports = {
  transform
};
