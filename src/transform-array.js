import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
  let comand = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ]
  let stack = [];

  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }

  /* for(let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
    if(arr[i] === comand[0]) {
      stack.splice(i++, i++);
    }
    if(arr[i] === comand[1]) {
      stack.splice(i--, i--);
    }
    if(arr[i] === comand[2]) {
      stack.splice(i,1, stack[i+1]);
    }
    if(arr[i] === comand[3]) {
      stack.splice(i,1, stack[i-1]);
    }
  }
  return stack; */
  // remove line with error and write your code here
}
