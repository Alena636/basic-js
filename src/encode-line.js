const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str ) {
  let count = 1
  let result = []
    for(let i = 0; i < str.length; i++) {
      if(str[i] === str[i + 1]) { // if element i = element + 1
        count++
      } else {
        if(count === 1) { // if count =1, add element in result
          result.push(str[i])
        } else {
          result.push(count, str[i]) //if count > 1, add number and element
          count = 1
        }
      }
    }  
    return result.join('')
}

module.exports = {
  encodeLine
};
