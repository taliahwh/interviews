function ListNode(val, next) {
  this.val = !val ? 0 : val;
  this.next = !next ? null : next;
}

// Using an adaption of Floyd's Algortihm, we'll create two pointers:
// A fast pointer and slow pointer

// Start by moving thr fast pointer (rightNode) n steps
// Next we'll move both the rightNode and leftNode until the rightNode is null
// This will result in the leftNode stopping at the node just before the actual node we
// want to remove.

// By initializing a tempHead and connecting it to the linked list, we handle the case of
// possibly removing the head node of the list

// Two Pointers
// Time: O(n)
// Space: O(1)
const removeNthFromEnd = (head, n) => {
  const tempHead = new ListNode(-Infinity);
  tempHead.next = head;
  let leftNode = tempHead;
  let rightNode = head;

  let count = 0;
  while (count < n) {
    rightNode = rightNode.next;
    count++;
  }

  while (rightNode) {
    rightNode = rightNode.next;
    leftNode = leftNode.next;
  }

  // rightNode is now null -> leftNode is node before index
  leftNode.next = leftNode.next.next;

  return tempHead.next;
};

const printList = (head) => {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
};

const nodeA = new ListNode(1);
const nodeB = new ListNode(2);
const nodeC = new ListNode(3);
const nodeD = new ListNode(4);
const nodeE = new ListNode(5);

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;

const nodeF = new ListNode(30);
const nodeG = new ListNode(40);
nodeF.next = nodeG;

// printList(nodeA);
// console.log(removeNthFromEnd(nodeA, 2));

console.log(removeNthFromEnd(nodeF, 1));
