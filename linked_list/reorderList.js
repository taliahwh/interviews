class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const reorderList = (head) => {
  // base case - empty list or list with only 1 node
  if (!head || !head.next) return head;

  // using two pointer (fast & slow) find the middle of list
  let slow = head;
  let fast = head;
  let prev = null;
  while (fast && fast?.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  // ends the first half of list before it reaches the middle node
  prev.next = null;

  // reverse list at the middle node
  prev = null;
  while (slow) {
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }
  // console.log('First half:');
  // printList(head);

  // console.log('Second half;');
  // printList(prev);

  // iterate while there are nodes in the reversed list
  // if the input list is of odd length, the revered list will have one extra node
  let head1 = head;
  let head2 = prev;
  while (head2) {
    const head1Next = head1.next;
    head1.next = head2;
    head1 = head2;
    head2 = head1Next;
  }
  printList(head);
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
const nodeF = new ListNode(6);
const nodeG = new ListNode(7);
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;
nodeE.next = nodeF;
nodeF.next = nodeG;

console.log(reorderList(nodeA));
