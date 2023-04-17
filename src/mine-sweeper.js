const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let row = matrix.length
  let column = matrix[0].length

  let arr = Array.from(Array(row), () => new Array(column)) //создаем новый массив 

  for(let i = 0; i < row; i++ ) {
    for(let a = 0; a < column; a++) {
      let mines = 0

      if(i > 0) {
        if(matrix[i - 1][a -1] || matrix[i - 1][a] || matrix[i - 1][a + 1]) {
          mines = mines + 1
        }
      }
      if(i < row - 1) {
        if(matrix[i + 1][a - 1] || matrix[i + 1][a] || matrix[i + 1][a + 1]) {
          mines = mines + 1
        }
      }
      if(matrix[i][a + 1] || matrix[i][a - 1]) {
        mines = mines + 1
      }
      arr[i][a] = mines
    }
  }
  return arr
}

module.exports = {
  minesweeper
};
