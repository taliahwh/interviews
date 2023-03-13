class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const swapPairs = (head) => {
  // handles base case for empty head input
  if (!head) return head;

  // using a tempHead to connect to our updated head node (after swap)
  const tempHead = new ListNode(-Infinity);
  let prev = tempHead;
  let current = head;
  let next = current.next;

  // handles base case for a list with a single node
  prev.next = current;

  // if there is no next property, we set it equal to null in order to break from while loop
  while (current && next) {
    const newNext = next.next || null;
    next.next = current; // reversing order
    current.next = newNext; // reconnecting the list
    prev.next = next; // connecting the earlier parts of the list with new swap
    prev = current; // move prev node forward

    current = current.next; // we know current.next exists because of the next var
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
