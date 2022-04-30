const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let k = 0, n, m, pos = 0;
  s1 = s1.split('').sort(function(a, b) { return a - b; }).join('');
  s2 = s2.split('').sort().join('');
  if(s1.length <= s2.length) {
    n = s1.length;
    m = s2.length;
  }
  else {
    m = s1.length;
    n = s2.length;
  }
  for (let i = 0; i < n; i++) {
    if (pos >= m) {
      pos = i;
    }
    for (let j = pos; j < m; j++) {
      if (s1[i] === s2[j]) {
        k++;
        pos = j + 1;
        break;
      }
      pos = j + 1;
    }
  }
  return k;
}

module.exports = {
  getCommonCharacterCount
};
