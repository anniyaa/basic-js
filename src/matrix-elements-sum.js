const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix ) {
  let result = 0;
  for (let i=0; i<matrix.length; i++) {
    for (let l=0; l<matrix[i].length; l++) {
      if (matrix[i-1]) {
        if (matrix[i-1][l] !== 0) {
          result+=matrix[i][l];
        }
      } else {
        result += matrix[i][l];
      }
    }
  }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
