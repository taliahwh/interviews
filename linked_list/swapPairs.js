class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const swapPairs = (head) => {
  if (!head) return head;

  const tempHead = new ListNode(-Infinity);
  let prev = tempHead;
  let current = head;
  let next = current.next;

  prev.next = current;

  while (current && next) {
    const newNext = next.next || null;
    next.next = current;
    current.next = newNext;
    prev.next = next;
    prev = current;

    current = current.next;
    next = current?.next || null;
  }
  printList(tempHead);
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
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;

console.log(swapPairs(nodeA)); // 2 -> 1 -> 4 -> 3
