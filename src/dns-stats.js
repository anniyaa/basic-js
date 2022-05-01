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
  let obj = {};
  domains.forEach(el=>{
    let domain = '';
    let point = 0;
    for  (let i=el.length-1; i>=0; i--) {
      if (el[i] === '.' || i === 1) {
        if (i===1) {
          domain+='.'+el.slice(i-1, el.length-point);
          if (!obj[domain]) {
            obj[domain] = 0;
          }
        } else if (!domain[el.slice(i, el.length-point)]) {
          domain += el.slice(i, el.length-point);
          if (!obj[domain]) {
            obj[domain] = 0;
          }
          point = el.length-i;
        }
        obj[domain]++;
      }
    }
  })
  return obj;
}

module.exports = {
  getDNSStats
};
