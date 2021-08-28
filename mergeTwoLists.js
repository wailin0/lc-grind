//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
        let list = new ListNode(0)
        while (l1 && l2) {
            if (l1.val > l2.val) {
                list.next = l2
            } else {
                list.next=l1
            }
        }
        return list
    }
;

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))
