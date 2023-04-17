const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
 for(let i = 0; i < names.length; i++) {
  let count = 0
  for(let a = i + 1; a < names.length; a++) { //а это повторяющийся эелмент
    if(names[i] === names[a]) {//если элементты равны, то каунт увеличивается
      count++
      let number = names[a] + '(' + count.toString() + ')'//добавляем к элементу каунт
      names.splice(a, 1, number)//добавляем 1 эелемнт (намбер) на место а 
    }
  }
 }
 return names
}

module.exports = {
  renameFiles
};
