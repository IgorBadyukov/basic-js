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
  let item = '';
  let add = '';
  if (options.hasOwnProperty('addition')) {
    if (options.hasOwnProperty('additionRepeatTimes') && options.additionRepeatTimes > 1) {
      let k = options.additionRepeatTimes;
      let mas = [];
      if (options.hasOwnProperty('additionSeparator')) {
        for (let i = 0; i < k; i++) {
          mas.push((String(options.addition)));
        }
        add = mas.join(options.additionSeparator);
      }
      else {
        for (let i = 0; i < k; i++) {
          mas.push((String(options.addition)));
        }
        add = mas.join('|');
      }
    }
    else {
      add = options.addition;
    }
  }
  item = str + add;
  if (options.hasOwnProperty('repeatTimes') && options.repeatTimes > 1) {
    let n = options.repeatTimes;
    let arr = [];
    if (options.hasOwnProperty('separator')) {
      for (let i = 0; i < n; i++) {
        arr.push(item);
      }
      return arr.join(options.separator);
    }
    else {
      for (let i = 0; i < n; i++) {
        arr.push(item);
      }
      return arr.join('+');
    }
  }
  return item;
}

module.exports = {
  repeater
};
