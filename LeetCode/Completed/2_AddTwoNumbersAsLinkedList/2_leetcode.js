/**
 * @see {@link https://leetcode.com/problems/add-two-numbers/ 2. Add Two Numbers}
 */

/**
 * EXPLAIN
 * Two linked lists; each has one single-digit int as val
 * Reverse order of digits to get one number:
 *    9 -> 1 -> 4   becomes   419
 *    8 -> 3 -> 7   becomes   738
 * Add those two reversed numbers and then return as LL!
 *
 *
 */

/**
 * APPROACH
 *
 * Values as powers of 10
 * create total val to store sums
 *
 * create power counter
 *
 * WHILE first list next is not null
 *    multiply node val x 10^powerCounter
 * END
 *
 * reset
 *
 * WHILE second list next is not null
 *    multiply node val x 10^powerCounter
 * END
 *
 * return total
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 1st ATTEMPT
 * 53minutes FAIL
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let total = 0;
  let power = 0;

  while (l1.next) {
    const currSum = l1.val * Math.pow(10, power);
    total += currSum;
    power++;

    // advance
  }
};

/**
 * Solution used
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // Create a dummy head node because
  // we need a pointer to the first node in the solution.
  // See how we return headNode.next at the end of the code.
  let headNode = new ListNode("dummy_node");

  // Keep track of the current node so that we can easily add a new node at the end
  let currNode = headNode;

  // Value carried over from previous addition (is either 0 or 1)
  let carry = 0;

  // Same as:  while (l1 != null || l2 != null || carry != 0)
  while (l1 || l2 || carry) {
    let sum = carry;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      // If the sum is two digit,
      // we need to carry over 1 to the next loop
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    // Add a new node to our solution (linked list)
    currNode.next = new ListNode(sum);

    // advance the current node
    currNode = currNode.next;
  }

  return headNode.next;
};

/**
 * READ         05:46
 * EXPLAIN      03:40   09:27
 * APPROACH     22:52   32:20
 * CODE [FAIL]  22:19   54:39
 * TEST
 * OPTIMIZE
 */
