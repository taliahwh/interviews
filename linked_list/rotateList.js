class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const rotateList = (head, k) => {
  if (!head || !head.next || k === 0) return head;

  // find length of list
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }

  // update k
  k = k % length;

  // move current pointer k steps
  current = head;
  while (k--) {
    current = current.next;
  }

  // move prev point along until current reaches end of list
  // prev pointer will stop at what will be the end of the original list
  let prev = head;
  while (current.next) {
    prev = prev.next;
    current = current.next;
  }

  current.next = head; // reconnect the list
  head = prev.next; // let head start at the rotation-point
  prev.next = null; // end the list

  printList(head);
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
// const nodeF = new ListNode(6);
// const nodeG = new ListNode(7);
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;
// nodeE.next = nodeF;
// nodeF.next = nodeG;

console.log(rotateList(nodeA, 2));
