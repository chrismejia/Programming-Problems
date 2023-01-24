/**
 * @see {@link https://leetcode.com/problems/middle-of-the-linked-list/?envType=study-plan&id=level-1 876. Middle of the Linked List}
 */

/**
 * EXPLAIN
 *
 * given LL return
 *    middle node if LL has ODD length
 *    2nd middle if LL has even length
 *
 * guaranteed to always have at least 1 node, at most 100
 * vals are between 1 and 100
 */

/**
 * APPROACH
 *
 * returning a NODE
 * need a pointer to know what node to return, this is mid node
 * need a pointer to advance the LL node searcher
 * need a flag to know WHEN to advance mid node, defaults to true, then flips
 *
 *
 * START LOOP
 *    IF no node.next
 *      return mid node
 *    ELSE (node.next DOES exists)
 *      advance LL node searcher to next node
 *
 *      IF flag to advance mid node is true
 *        advance mid node pointer
 *        set flag to false
 *      ELSE
 *        set flag to true to trigger mid advancement NEXT loop
 *          if reaches this point
 *        do nothing else
 * END LOOP
 *
 * curr endPointer is null, reached end of LL
 *  return current mid node
 */

/**
 * CODE
 * TIME:    75ms - 47%
 * MEMORY:  42.3MB - 25%
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
var middleNode = function (head) {
  let endNode = head;
  let midNode = head;
  let advanceMidNode = true;

  while (endNode) {
    if (!endNode.next) {
      return midNode;
    }

    endNode = endNode.next;

    if (advanceMidNode) {
      midNode = midNode.next;
    }

    advanceMidNode = !advanceMidNode;
  }

  return midNode;
};
/**
 * OPTIMIZED
 * TIME:    66ms - 69%
 * MEMORY:  42.1MB - 49%
 * Uses a fast pointer that advances two at a time
 * and a slow pointer that advances one at a time
 */

var middleNode = function (head) {
  let fast = head.next;
  while (fast) {
    head = head.next;
    fast = fast.next?.next;
  }
  return head;
};

/**
 * COMPLEXITY
 * TIME   O(n), where n is the length of the LL
 * SPACE  O(1), only ever storing one node per variable at a time, not a growing value set
 */

/**
 * READ             00:47
 * EXPLAIN          01:31   02:18
 * APPROACH         12:48   15:07
 * CODE [PASS]      12:27   27:36
 * TEST             06:01   33:37
 * OPTIMIZE         24:37   58:38
 */
