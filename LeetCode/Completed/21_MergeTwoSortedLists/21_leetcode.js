/**
 * @see {@link https://leetcode.com/problems/merge-two-sorted-lists/?envType=study-plan&id=level-1 21. Merge Two Sorted Lists}
 */

/**
 * EXPLAIN
 *
 * given two LL where vals of each node are guaranteed to be the lowest in each LL
 * need to return the HEAD of each list
 * not guaranteed to be same list size
 */

/**
 * APPROACH
 *
 * create new LL
 * create separate ref value to new LL
 * create refs to L1 and L2
 *
 * WHILE LOOP until both LL dont exist
 *
 *    IF L1 DNE but L2 exists
 *        create next on new LL using L2
 *        advance ref on new LL
 *        continue
 *    IF L2 but DNE but L1 exists
 *        create next of new LL using L1
 *        advance ref on new LL
 *        continue
 *
 *    IF L1 val greater than L2
 *        create next on new LL using L1 val
 *        advance ref to L1 next
 *        advance ref on new LL
 *    ELSE IF L2 val greater than L1
 *        create next on new LL using L2 val
 *        advance ref to L2 next
 *        advance ref on new LL
 *    ELSE both L1 and L2 are the same
 *        create next on new LL using L1
 *        create next.next on new LL using L2
 *        advance both L1 and L2 to next
 *        advance new LL twice
 * LOOP ENDS when L1 and L2 DNE
 *
 * return separate ref val to new LL
 */

/**
 * CODE [FAIL]
 * issue where I would get leading 0 value for undefined vals when handling empty lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const merged = new ListNode();
  let mergedRef = merged;

  // BASE CASE: NO NODES
  if (!list1 && !list2) return new ListNode();

  while (list1 || list2) {
    // CASES: one of the lists in null, other still has vals
    if (!list1) {
      mergedRef.next = new ListNode(list2.val);
      mergedRef = mergedRef.next;
      list2 = list2.next;
      continue;
    }

    if (!list2) {
      mergedRef.next = new ListNode(list1.val);
      mergedRef = mergedRef.next;
      list1 = list1.next;
      continue;
    }

    // CASES: both lists still have vals
    if (list1.val > list2.val) {
      mergedRef.next = new ListNode(list1.val);
      mergedRef = mergedRef.next;
      list1 = list1.next;
    } else if (list2.val > list1.val) {
      mergedRef.next = new ListNode(list2.val);
      mergedRef.next = mergedRef;
      list2 = list2.next;
    } else {
      mergedRef.next = new ListNode(list1.val);
      mergedRef.next.next = new ListNode(list2.val);
      mergedRef = mergedRef.next.next;
      list1 = list1.next;
      list2 = list2.next;
    }
  }
  return merged;
};

/**
 * Compare with working solution
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head = new ListNode(),
    tail;

  if (!list1 || !list2) {
    return list2 || list1;
  }

  if (list1.val < list2.val) {
    head = list1;
    list1 = list1.next;
  } else {
    head = list2;
    list2 = list2.next;
  }
  tail = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      tail = tail.next;
      list1 = list1.next;
    } else if (list1.val > list2.val) {
      tail.next = list2;
      tail = tail.next;
      list2 = list2.next;
    } else if (list1.val == list2.val) {
      tail.next = list1;
      tail = tail.next;
      list1 = list1.next;
      tail.next = list2;
      tail = tail.next;
      list2 = list2.next;
    }
  }
  tail.next = list1 || list2;
  return head;
};

/**
 * SOLUTION USED
 * Recursive solution
 * https://leetcode.com/problems/merge-two-sorted-lists/solutions/2705782/js-recursion-with-exlanation/?envType=study-plan&id=level-1&orderBy=most_votes&languageTags=javascript
 */

var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  else if (!l2) return l1;
  else if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

/**
 * WHILE LOOP Solution
 * https://leetcode.com/problems/merge-two-sorted-lists/solutions/2630303/fast-typescript-solution-75-ms-top-95-speed/
 */
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const mergedHead: ListNode = new ListNode(-1, null);
  let prev: ListNode = mergedHead;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      prev.next = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      list2 = list2.next;
    }
    prev = prev.next;
  }
  prev.next = list1 ? list1 : list2;

  return mergedHead.next;
}

/**
 * READ         09:08
 * EXPLAIN      06:51   15:59
 * APPROACH     05:08   21:08
 * CODE         09:01   30:09
 * TEST [FAIL]  09:44   39:53
 * OPTIMIZE
 */
