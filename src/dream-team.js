const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let str = '';
  if(!members || !Array.isArray(members)) {
    return false;
  }
  for (let item of members) {
    if(item && typeof item === "string") {
      str += item.trim().toUpperCase()[0];
    }
  }
  return str.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
