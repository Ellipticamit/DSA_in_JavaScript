// TIme Complexity: O(n+m)
// Space Complexity: O(n+m);

var addTwoNumbers = function (l1, l2) {
  var head = null
  var temp = null
  var carry = 0
  while (l1 !== null || l2 !== null) {
    var sum = carry

    if (l1 !== null) {
      sum += l1.val
      l1 = l1.next
    }

    if (l2 !== null) {
      sum += l2.val
      l2 = l2.next
    }

    var node = new ListNode(sum % 10)
    carry = sum > 9 ? 1 : 0

    if (temp === null) {
      temp = head = node
    } else {
      temp.next = node
      temp = temp.next
    }
  }
  if (carry > 0) {
    temp.next = new ListNode(carry)
  }

  return head
}
