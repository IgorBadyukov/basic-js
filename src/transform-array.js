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
  if (!Array.isArray((arr))) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = arr.slice();
  for (let index in newArr) {
    if (newArr[+index] === '--double-next' ||
        newArr[+index] === '--double-prev' ||
        newArr[+index] === '--discard-next' ||
        newArr[+index] === '--discard-prev')
    {
      if(newArr[+index] === '--double-next') {
        if(+index != newArr.length && newArr[+index + 1] !== 'xxx') {
          newArr[+index] = newArr[+index + 1];
        }
      }
      else if(newArr[+index] === '--double-prev') {
        if(+index != 0 && newArr[+index - 1] !== 'xxx') {
          newArr[+index] = newArr[+index - 1];
        }
      }
      else if(newArr[+index] === '--discard-next') {
        if(+index != newArr.length && newArr[+index + 1] !== 'xxx') {
          newArr[+index + 1] = 'xxx';
        }
      }
      else {
        if(+index != 0 && arr[+index - 1] !== 'xxx') {
          newArr[+index - 1] = 'xxx';
        }
      }
    }
  }
  const mas = [];
  newArr.forEach(item => {
    if (item !== 'xxx' && item !== '--double-next'
        && item !== '--double-prev'
        && item !== '--discard-next'
        && item !== '--discard-prev' && item !== undefined) {
      mas.push(item);
    }
  });
  return mas;
}

module.exports = {
  transform
};
