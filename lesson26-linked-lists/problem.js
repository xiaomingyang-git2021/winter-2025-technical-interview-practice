/**
 * 876. Middle of the Linked List
 * Given the head of a singly linked list, return the middle
 * node of the linked list.
 *
 * if there are two middle nodes, return the second middle node.
 *
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [3,4,5]
 * Explanation: The middle node of the list is node 3.
 *
 * Example 2:
 * Input: head = [1,2,3,4,5,6]
 * Output: [4,5,6]
 * Explanation: Since the list has two middle nodes with values 3 and 4, we
 * return the second one.
 *
 * constraints:
 * The number of nodes in the list is in the range [1,100]
 * 1 <= Node.val <= 100
 *
 */

var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

/**
 * 141. Linked List Cycle
 *
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

 

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:


Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
Example 3:


Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
 

Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
 */

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
}

/**
 * you are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
 */

function mergeTwoLists(list1, list2) {
  // Step 1: Create a dummy node to simplify the merging process
  let dummy = new ListNode(0);
  let current = dummy; // Pointer for the merged list

  // Step 2: Initialize pointers for both lists
  let p1 = list1;
  let p2 = list2;

  // Step 3: Compare and merge nodes
  while (p1 !== null && p2 !== null) {
    if (p1.val < p2.val) {
      current.next = p1; // Append p1's node
      p1 = p1.next; // Move p1 pointer
    } else {
      current.next = p2; // Append p2's node
      p2 = p2.next; // Move p2 pointer
    }
    current = current.next; // Move current pointer
  }

  // Step 4: Append remaining nodes
  if (p1 !== null) {
    current.next = p1; // If list1 has remaining nodes
  } else if (p2 !== null) {
    current.next = p2; // If list2 has remaining nodes
  }

  // Step 5: Return the merged list, skipping the dummy node
  return dummy.next;
}
