const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(/*arr*/) {
    throw new NotImplementedError('Not implemented');
    let result = 1;
    let results = ''
    goDeeper(arr)
    function goDeeper(arr) {
      for (let i=0; i<arr.length; i++) {
        if (typeof arr[i] === 'object' && arr.splice()) {
          result++
          goDeeper(arr[i]);
        }
        if (i===arr.length-1) {
          if (results < result ) {
            results = result
          }
          result = 1
        }

      }
    }
    return results
  }
}

module.exports = {
  DepthCalculator
};
