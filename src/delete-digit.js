const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('');
  let maxNum = '';
  for (let i = 0; i < arr.length - 1; i++) {
    maxNum += arr[i];
  }
  maxNum = Number(maxNum);
  let mas = arr.map(item => {
    return Number(item);
  });
  for (let i = 0; i < mas.length; i++) {
    let newMas = [...mas];
    newMas.splice(i, 1);
    let num = Number(newMas.join(''));
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
