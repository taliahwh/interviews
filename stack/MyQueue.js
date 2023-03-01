var MyQueue = function () {
  this.queue = [];
  this.helperStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.queue.push(x); // pushes to back of queue
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (!this.helperStack.length) {
    while (this.queue.length) {
      // adds the vals of queue to helperStack in reverse order,
      // so that the first element of queue can be accessed by the pop() method
      this.helperStack.push(this.queue.pop());
    }
  }
  return this.helperStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.helperStack.length
    ? this.helperStack[this.helperStack.length - 1]
    : this.queue[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  console.log('queue:', this.queue);
  console.log('helperStack:', this.helperStack);

  // return this.helperStack.length === 0 ? true : false;
  return !this.helperStack.length && !this.queue.length;
};

const myQueue = new MyQueue();
console.log(myQueue.push(1)); // queue is: [1]
console.log(myQueue.push(2)); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue.peek()); // return 1
console.log(myQueue.pop()); // return 1, queue is [2]
console.log(myQueue.empty()); // return false
