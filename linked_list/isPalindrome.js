// PROMPT:
// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Time: O(n)
// Space: O(1)
const isPalindrome = (head) => {
  let fast = head;
  let slow = head;

  // Using fast a pointer that takes 2 steps and a slow pointer that take 1 step,
  // once the fast pointer is null, we've reached the middle of the node which is
  // at the slow pointers index
  while (fast?.next) {
    fast = fast.next.next; // moves 2 steps
    slow = slow.next; // moves 1 step
  }

  // reverse the list at the middle node
  let reversed = reverseList(slow);

  let headNode = head;
  let reversedNode = reversed;

  // iterate while there is a reversedNode and the headNode !== middle node
  while (reversedNode && headNode !== slow) {
    if (headNode.val !== reversedNode.val) return false;
    headNode = headNode.next;
    reversedNode = reversedNode.next;
  }

  return true;
};

const reverseList = (head) => {
  let current = head;
  let prev = null;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

const nodeA = new ListNode(1);
const nodeB = new ListNode(2);
const nodeC = new ListNode(2);
const nodeD = new ListNode(1);
// const nodeE = new ListNode(1);

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
// nodeD.next = nodeE;

console.log(isPalindrome(nodeA));
