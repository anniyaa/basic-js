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
  constructor(type=true) {
    this.machineType = type;
    this.alph = 'abcdefghijklmnopqrstuvwxyz';
  }

  encrypt(str, key) {
    if (arguments.length<2 || str === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let res = '';
    let iKey = 0;

    for (let i=0; i<str.length; i++) {
      if (this.alph.includes(str[i].toLowerCase())) {
        console.log(str[i])
        res += this.alph[(str[i].toLowerCase().charCodeAt()-97 + key[iKey % key.length].toLowerCase().charCodeAt()-97) % 26];
        iKey++;
      } else {
        res += str[i];
      }
    }

    return this.machineType ? res.toUpperCase() : res.toUpperCase().split('').reverse().join('');
  }
  decrypt(str, key) {
    if (arguments.length<2 || str === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    let res = '';
    let iKey = 0;

    for (let i=0; i<str.length; i++) {
      if (this.alph.includes(str[i].toLowerCase())) {
        res += this.alph[((str[i].toLowerCase().charCodeAt()-97) - (key[iKey % key.length].toLowerCase().charCodeAt()-97)+26) % 26];
        iKey++;
      } else {
        res += str[i];
      }
    }

    return this.machineType ? res.toUpperCase() : res.toUpperCase().split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
