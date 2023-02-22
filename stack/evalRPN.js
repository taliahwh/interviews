const operators = '+-*/';
const supportedOperations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => Math.trunc(a / b),
};

const evalRPN = (tokens) => {
  const stack = [];

  for (let token of tokens) {
    console.log(stack);
    // check if token is an operator or number
    if (operators.includes(token)) {
      // if operator, perform operation on last two values in stack
      // and push its value into stack
      // remove the last two vals and stack and replace with output returned from eval function
      let b = stack.pop();
      let a = stack.pop();
      stack.push(eval(token, a, b));
    } else {
      // if number -> convert to number and push to stack
      stack.push(Number(token));
    }
  }
  return stack[0];
};

const eval = (op, a, b) => {
  if (op in supportedOperations) {
    return supportedOperations[op](a, b);
  }
};

// const test1 = evalRPN(['2', '1', '+', '3', '*']);
// const test2 = evalRPN(['4', '13', '5', '/', '+']);
const test3 = evalRPN([
  '10',
  '6',
  '9',
  '3',
  '+',
  '-11',
  '*',
  '/',
  '*',
  '17',
  '+',
  '5',
  '+',
]);

// console.log(test1); // -> 9
// console.log(test2); // -> 9
console.log(test3); // -> 22
