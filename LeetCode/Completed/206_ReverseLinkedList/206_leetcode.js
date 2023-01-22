/**
 * @see {@link https://leetcode.com/problems/reverse-linked-list/?envType=study-plan&id=level-1 206. Reverse Linked List}
 */

/**
 * EXPLAIN
 *
 * Start at head of an LL, SINGLY LINKED
 * Create a LL, fill it with the original LL vals, reversed
 * return that reversed LL
 */

/**
 * APPROACH
 *
 * RECURSION, create a stack to get to the end of the LL
 * Recurse backwards to get the vals in reverse order
 *
 * WHILE HAS NEXT
 *    return func (curr.next)
 *
 * DOESN'T HAVE NEXT
 *    new LL val is curr val
 *    new LL next is new node
 *    advance new LL ref to next
 *    return original LL
 */

/**
 * CODE
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (currNode, prevNode) {};

/**
 * COMPLEXITY
 * TIME   O()
 * SPACE  O()
 */

/**
 * READ             0
 * EXPLAIN          0
 * APPROACH         0
 * CODE [FAIl]      0
 * TEST             0
 * OPTIMIZE         0
 */

/**
 * REVIEW
 *
 * ITERATIVE EXPLANATION
 * TIME     O(n) depends of length of list
 * SPACE    O(1) just pointers, overwriting existing list next ref
 *
 * use two pointer curr and prev
 * assign curr to head, prev to null
 *
 * WHILE current isnt null
 *
 *    temp store next node as next
 *    rewrite curr next to prev
 *
 *    update prev to curr node
 *    update curr to next node
 * END WHILE
 *
 * return prev, which is now the head
 */
var reverseList = function (head) {
  let curr = head;
  let prev = null;

  while (curr !== null) {
    // store next node
    let next = curr.next;

    // reverse link
    curr.next = prev;

    // update pointer
    prev = curr;
    curr = next;
  }
  return prev;
};
/**
 * RECURSIVE EXPLANATION
 * TIME     O(n) n is length of LL
 * SPACE    O(n) is number of calls on the stack
 *
 * Adding another variable to the problem was the right intuition. It was the PREV ref, not the whole list that needed to be passed.
 *
 * Steps go like this:
 *
 * reverseList accepts the current node, and the ref to the previous node
 * IF there's no node, return prev, starting the recursive chain
 *
 * define the next recursion's next as the next node
 * assign the value of curr node next to prev node ref
 * return recursive call with next as curr node, curr node as prev
 */
var reverseList = function (head, prev = null) {
  if (!head) return prev;
  let next = head.next;
  head.next = prev;
  return reverseList(next, head);
};
