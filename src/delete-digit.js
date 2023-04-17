const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
 let str = n.toString() 
 let result = []

 for(let i in str) {
  let arr = str.split('') // разделяем каждый элемент 
  arr[i] = '' //['', '5', '2'] || ['1', '', 2] || [1, 5, '']
  result.push(arr.join(''))//добавляем объединенные эелемнты в строку в конец массива
 }
 return Math.max(...result)
}

module.exports = {
  deleteDigit
};
