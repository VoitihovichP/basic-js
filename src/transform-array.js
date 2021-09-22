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

  for(let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }
  for(let j = 0; j < arr.length; j++) {
    if(arr[j] === comand[0]) {
      stack.splice(j++, j++);
    }
    if(arr[j] === comand[1]) {
      stack.splice(j--, j--);
    }
    if(arr[j] === comand[2]) {
      stack.concat(j++);
    }
    if(arr[j] === comand[3]) {
      stack.concat(j--);
    }
  }
  return stack;
  // remove line with error and write your code here
}
