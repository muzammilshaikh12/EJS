var middleNode = function(head) {
    if(head === null) return null;

    let slowPointer = head;

    let fastPointer = head;

    while(fastPointer && fastPointer.next){

        fastPointer = fastPointer.next.next;

        slowPointer = slowPointer.next;

    }
