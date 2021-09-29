import { NotImplementedError } from '../extensions/index.js';

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
export default function createDreamTeam(members) {
  let dreamArr = [];
  let dreamResult = '';

  if(Array.isArray(members) && members.length > 0) {
    for(let item of members) {
      if(typeof(item) === 'string' && typeof(item.trim()[0]) === 'string') {
        dreamArr.push(item.trim()[0].toUpperCase());
      }
    }
    dreamResult = dreamArr.sort().join('');
    if(dreamResult.length > 0) {
      return dreamResult;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
