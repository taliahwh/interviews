class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const oddEvenList = (head) => {
  if (!head) return head;

  let oddHead = head;
  let evenHead = head.next;
  let odd = oddHead;
  let even = evenHead;

  while (even && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  printList(oddHead);
  return head;
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

console.log(oddEvenList(nodeA));
