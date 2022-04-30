const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let objResult = {};
  for (let item of domains) {
    let mas = item.split('.').map(elem => {
      return '.' + elem;
    });
    let url = '';
    for (let i = mas.length - 1; i >= 0; i--) {
      url += mas[i];
      if(objResult.hasOwnProperty(url)) {
        objResult[url]++;
      }
      else {
        objResult[url] = 1;
      }
    }
  }
  return objResult;
}

module.exports = {
  getDNSStats
};