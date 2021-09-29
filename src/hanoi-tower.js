import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
  const obj = {
    turns: 0,
    seconds: 0,
  }
  if(typeof(disksNumber) === 'number') {
    obj['turns'] = Math.pow(2, disksNumber) - 1;
  } else {
    return false;
  }
  if(typeof(turnsSpeed) === 'number') {
    obj['seconds'] = Math.floor((obj['turns'] / turnsSpeed) * 3600);
  } else {
    return false;
  }
  return obj;
}
