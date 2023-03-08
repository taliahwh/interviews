class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Insertion Sort -> O(n^2) time complexity
 *
 * For this problem we will use Merge Sort which runs in O(n logn) time complexity
 * 1. Using slow/fast pointers, find the middle of the list
 * 2. Make a recusrive call on the first and second half of the list
 * 3. Merge the two sorted linked lists and return the head
 */

const sortList = (head) => {
  if (!head || !head.next) return head; // base case

  let slow = head;
  let fast = head;
  let tail = slow;

  while (fast?.next) {
    tail = slow;
    fast = fast.next.next; // 2 steps
    slow = slow.next; // 1 step
  }
  tail.next = null;

  const list1 = sortList(head);
  const list2 = sortList(slow);
  return mergeList(list1, list2);
};

const mergeList = (head1, head2) => {
  let current1 = head1;
  let current2 = head2;
  let tempHead = new ListNode(null);
  let tail = tempHead;

  while (current1 && current2) {
    if (current1.val < current2.val) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }

  if (current1) tail.next = current1;
  if (current2) tail.next = current2;
  printList(tempHead.next);
  return tempHead.next;
};

const printList = (head) => {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
};

const nodeA = new ListNode(4);
const nodeB = new ListNode(2);
const nodeC = new ListNode(1);
const nodeD = new ListNode(3);
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;

// printList(nodeA);
sortList(nodeA);
