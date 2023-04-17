const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n ) {
  let address = '0123456789ABCDEF'
  let result = n.split('-').map(element => {//строка превращается в массив[00, 1B, 63, 84,..] и проходимся по каждому элементу
    if(element.length !== 2){
      element = 'false'
    } else if(address.includes(element[0]) && address.includes(element[1])) {//если строка адреса включает в себя эелменты из массива, то тру
      element = 'true'
    } else{
      element = 'false'
    }
    return element
  })
  if(result.includes('false')) {//если хоть один элемент фолс, то все фолс
    return false
  } else{ 
    return true
  }
}
module.exports = {
  isMAC48Address
};
