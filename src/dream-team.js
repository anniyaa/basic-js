const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (typeof members !== 'object' || members === null || !(members.splice)) {return false}
  let result = '';
  let a = members.filter(a=>{if(typeof a === 'string'){return a}})
      .map( a=>{return a.split(' ').join('').toUpperCase()})
      .sort((a,b)=>{
    return a.charCodeAt(0) - b.charCodeAt(0);
  })
  a.forEach(name=>result+=name[0])
  return result;
}

module.exports = {
  createDreamTeam
};


