class Solution {
    //Function to check if the linked list has a loop.
    detectLoop(head)
    {
        //your code here
        let slow = head

  let fast = head

  //traverse linked list

  while(fast && fast.next){

    // fast moves by two

    fast = fast.next.next

    // slow moves by one

    slow = slow.next

    // two pointers meet, cycle

    if(fast === slow){

      return true

    }

  }

   

  return false

    }
    
}
