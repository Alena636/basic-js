const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {
  let result = {} //должен вернуться объект
  
  for(let element of domains) {
    let arr = element.split('.').reverse()
    console.log(arr)//каждый эелемнт в объекте превращается в массив ['ru', 'yandex', 'code'] и тд
    for(let i = 0; i < arr.length; i++) { 
      let domain = '.' + arr.slice(0, i + 1).join('.')
      console.log(domain)//проходимся по созданному массиву и создаем новый[.ru], [.ru.yandex], [.ru.yandex.code]
      result[domain] = result[domain] ? result[domain] + 1 : 1//если появляеются новые домэйны в результе, то +1, если нет, то 1
    } 
    
  }
  return result
 
}

module.exports = {
  getDNSStats
};
