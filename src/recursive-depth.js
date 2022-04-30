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
  calculateDepth(arr, n = 1) {
    let max = n;
    for (let item of arr) {
      if (Array.isArray(item)) {
        let current = this.calculateDepth(item, n + 1);
        max = current > max ? current : max;
      }
    }
    return max;
  }
}

module.exports = {
  DepthCalculator
};
