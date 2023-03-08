class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addTwoNumbers = (l1, l2) => {
  let current1 = l1;
  let current2 = l2;
  let tempHead = new ListNode(-Infinity);
  let tail = tempHead;
  let carry = 0;

  // iterate while there is at least one node either of the two lists
  while (current1 || current2 || carry !== 0) {
    // sum together the values of the two nodes and the carry var, replacing a null node with a 0
    const val1 = current1 ? current1.val : 0;
    const val2 = current2 ? current2.val : 0;
    const sum = val1 + val2 + carry;

    // if the sum > 9, we know that it is least 2 digits and the carry is 1
    carry = sum > 9 ? 1 : 0;
    const remainder = sum % 10;

    tail.next = new ListNode(remainder);
    tail = tail.next;

    if (current1) current1 = current1.next;
    if (current2) current2 = current2.next;
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

const node2 = new ListNode(2);
const node4 = new ListNode(4);
const node3 = new ListNode(3);
node2.next = node4;
node4.next = node3;

const node5 = new ListNode(5);
const node6 = new ListNode(6);
const node7 = new ListNode(4);
node5.next = node6;
node6.next = node7;

console.log(addTwoNumbers(node2, node5));
