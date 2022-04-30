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
  let codeStr = '';
  let count = 0;
  let cur = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == cur) {
      count++;
    }
    else {
      let add = count == 1 ? cur : count + cur;
      codeStr += add;
      cur = str[i];
      count = 1;
    }
    if(i === str.length - 1) {
      let add = count == 1 ? cur : count + cur;
      codeStr += add;
    }
  }
  return codeStr;
}

module.exports = {
  encodeLine
};
