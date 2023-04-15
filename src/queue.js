const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.queue = null;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    let el = this.queue;
    if (!el) {
      this.queue = {'value': value, 'next': null};
      return;
    }
    while (el.next) {
      el = el.next;
    }
    el.next = {'value': value, 'next': null}
  }

  dequeue() {
    if (this.queue) {
      let res = this.queue.value;
      this.queue = this.queue.next;
      return res;
    }
  }
}

module.exports = {
  Queue
};
