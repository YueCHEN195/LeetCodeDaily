/**
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
*/

// 模拟算术的实现过程，正序相加是向前进位，那么逆序相加就是向后进位就可以了

var addTwoNumbers = function(l1, l2) {
  var flag = 0
  var currentNode = null
  var beforeNode = null
  var sum = 0
  while(l1 || l2 || flag){
      if(l1 && l2){
          sum = l1.val + l2.val + flag
      }else if(l1 && !l2){
          sum = l1.val + flag
      }else if(!l1 && l2){
          sum = l2.val + flag   //注意这种情况也可有可能大于等于10，要进位的
      }else {
          sum = flag
      }
      flag = 0
      if(sum >= 10){
          sum = sum - 10
          flag = 1
      }
      beforeNode = currentNode
      currentNode = new ListNode(sum)
      if(!beforeNode){
          var head = currentNode
      }else{
          beforeNode.next = currentNode
      }
      if(l1) l1 = l1.next
      if(l2) l2 = l2.next
  }
  return head
};