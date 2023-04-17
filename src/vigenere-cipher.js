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

  constructor(mode = true) {
    this.mode = mode
  }

  encrypt(message, key) {
    if(message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ') //создаем массив
    message = message.toUpperCase()
    key = key.toUpperCase()
    
    let result = ''
    let keyInd = 0
    for(let i = 0; i < message.length; i++) {
      let el = message[i]
      let keyEl = key[keyInd % key.length]
     
      let number = alphabet.indexOf(keyEl) 
  

      if(alphabet.includes(el)) {
        let elIndex = (alphabet.indexOf(el) + number) % alphabet.length//находим элемент по массиву

        result = result + alphabet[elIndex]
        keyInd++
      } else {
        result = result + el
      }
    }
    return this.mode ? result: result.split('').reverse().join('')
  }
  decrypt(message, key) {
    if(message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    key = key.toUpperCase()
    key = Array.from(key).map((el) => {
      let index = alphabet.indexOf(el)
      return alphabet[(alphabet.length - index) % alphabet.length]
    }).join('')
    return this.encrypt(message, key)
  }
}

module.exports = {
  VigenereCipheringMachine
};
