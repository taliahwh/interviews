/**
 * Iterate though list once and count the number of nodes in list
 * Find the middle index
 * - If there are an odd num of nodes, return the Math.ceil of length / 2
 * - If there are an EVEN num of nodes, return the middle + 1 (second middle node)
 * Iterate a second time and return a node at the middle index
 */
const middleList = (head) => {
  let length = 0;
  let current = head;
  // find length of list
  while (current) {
    length++;
    current = current.next;
  }
  const middle = length % 2 === 0 ? length / 2 + 1 : Math.ceil(length / 2); // find middle index

  let index = 0;
  current = head;
  while (current) {
    // find node at middle index
    index++;
    if (index === middle) return current;
    current = current.next;
  }
};
