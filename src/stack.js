const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    let res = this.stack.at(-1);
    return res;
  }
}


module.exports = {
  Stack
};

/*
let k = null;
const stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(7);
k = stack.peek();
console.log('k(7) ', k);
k = stack.pop();
console.log('k(7) ', k);
k = stack.peek();
console.log('k(6) ', k);
*/