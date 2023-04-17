const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let elements = arr.filter((num) => num !== -1).sort((a, b) => a - b) //фильтруем массив, но только те элементы которые не -1
  let result = 0
  arr.forEach((element, index, arr) => {
    if(element !== -1) {
      arr[index] = elements[result]//если эелмент не -1, то присваем ему новое место в массиве
      result++
    }
  })
  return arr
}

module.exports = {
  sortByHeight
};
