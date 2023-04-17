const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
  }

  calculateDepth(arr) {
    let result = 1;
    let tempRes = 1;

    if ((arr.filter(i=>i.constructor.name=='Array').length>0)) {
      arr.forEach(el=>{

        if (Array.isArray(el)) {

          tempRes = 1 + this.calculateDepth(el)
          if (tempRes>result) result = tempRes;

        }


      })
    } else {
      tempRes = 1;
    }



    return result;
  }
}

module.exports = {
  DepthCalculator
};
