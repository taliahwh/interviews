/**
 * To solve this and save on space complexity, we will reverse the list in place
 * by using prev and next variables to help keep track of which direction the list is going.
 *
 * To start, set the prev pointer to null. Store the value of the next pointer to avoid
 * reassigning to early.
 *
 *
 */

const reverseList = (head) => {
  if (!head) return [];
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = prev; // reverse pointers
    prev = current; // move prev forward
    current = next; // move current forward
  }
  return prev;
};
