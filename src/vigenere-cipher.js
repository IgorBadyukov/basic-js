const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
    str = str.toUpperCase().split('');
    key = key.toUpperCase().split('');
    for (let i = 0, x = 0; i < str.length; i++) {
      if (str[i] >= 'A' && str[i] <= 'Z') {
        let charCode = str[i].charCodeAt(0) + key[x++ % key.length].charCodeAt(0) - 65;
        if (charCode > 90) {
          charCode -= 26;
        }
        str[i] = String.fromCharCode(charCode);
      }
    }
    return this.direct ? str.join('') : str.reverse().join('');
  }
  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
    str = str.toUpperCase().split('');
    key = key.toUpperCase().split('');
    for (let i = 0, x = 0; i < str.length; i++) {
      if (str[i] >= 'A' && str[i] <= 'Z') {
        let charCode = str[i].charCodeAt(0) - key[x++ % key.length].charCodeAt(0) + 65;
        if (charCode < 65) {
          charCode += 26;
        }
        str[i] = String.fromCharCode(charCode);
      }
    }
    return this.direct ? str.join('') : str.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
