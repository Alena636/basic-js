const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
  throw new Error (`'arr' parameter must be an instance of the Array!`)
}
  const result = [];
  let i = 0; 
  while(i < arr.length) {
    const cur = arr[i];
    if (cur === '--discard-next') i += 1;
    else if (cur === '--discard-prev') {
        const prev = arr[i - 1];
        if (result[result.length - 1] === prev) result.pop()
    }
    else if (cur === '--double-next') {
      const next = arr[i + 1];
      if (next !== undefined) result.push(next)
    }
    else if (cur === '--double-prev') {
      const prev = arr[i - 1];
      if (result[result.length - 1] === prev && prev !== undefined) result.push(prev)
    }
    else result.push(cur);
    i += 1;
  }
  return result;
}


module.exports = {
  transform
};
