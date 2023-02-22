// Time: 0(1)
// Space: O(n)
var MinStack = function () {
  this.stack = [];
};

/**

 @param {number} x
 @return {void}
 */
MinStack.prototype.push = function (val) {
  // if the stack is empty, set the min to the input val
  // if it already contains vals, test the min against prev entered min
  // push input val into stack

  // [ { minVal, val } ]
  this.stack.push({
    minVal: !this.stack.length
      ? val
      : Math.min(this.stack[this.stack.length - 1].minVal, val),
    val,
  });
};

/**
 * @return {void}
 * Removes the element on the top of the stack
 */
MinStack.prototype.pop = function () {
  if (!this.stack.length) return null;
  this.stack.pop();
};

/**
 * @return {number}
 * Gets the top element of the stack
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 * Retrieves the minimum element in the stack
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1].minVal;
};

const obj = new MinStack();
obj.push(33);
obj.push(13);
obj.push(20);
obj.push(3);
obj.push(44);
obj.push(5);
const top = obj.top();
const min = obj.getMin();
console.log(top); // -> 5
console.log(min); // -> 3
console.log(obj);
