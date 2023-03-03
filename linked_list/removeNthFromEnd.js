function ListNode(val, next) {
  this.val = !val ? 0 : val;
  this.next = !next ? null : next;
}

// Two Pointers
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
