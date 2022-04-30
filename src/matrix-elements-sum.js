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
function getMatrixElementsSum(matrix) {
  let s = 0;
  let n = matrix.length;
  let m = matrix[0].length;
  for (let j = 0; j < m; j++) {
    s+=matrix[0][j];
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i - 1][j] !== 0) {
        s+=matrix[i][j];
      }
    }
  }
  return s;
}

module.exports = {
  getMatrixElementsSum
};
