class Node {
    constructor() {
      this.data = 0;
      this.next = null;
    }
  }

  // UTILITY FUNCTIONS
  // Push a node to linked list.
  // Note that this function
  // changes the head
  function push(head_ref, new_data) {
    // allocate node
    var new_node = new Node();

    // put in the data
    new_node.data = new_data;

    // link the old list off
    // the new node
    new_node.next = head_ref;

    // move the head to point
    // to the new node
    head_ref = new_node;
    return head_ref;
  }

  // Printing the linked list
  function printList(head) {
    var temp = head;
    while (temp != null) {
      document.write(" " + temp.data);
      temp = temp.next;
    }
  }

  // Function to rearrange even
  // and odd elements in a linked
  // list using deque
  function evenOdd(head) {
    var temp = head;

    // Declaring a Deque
    var d = [];

    // Push all the elements of
    // linked list in to deque
    while (temp != null) {
      // if element is even push it
      // to front of the deque
      if (temp.data % 2 == 0) d.unshift(temp.data);
      // else push at the
      // back of the deque
      else d.push(temp.data);

      // increase temp
      temp = temp.next;
    }

    temp = head;

    // Replace all elements of
    // the linked list with the
    // elements of Deque starting
    // from the first element
    while (d.length != 0) {
      temp.data = d[0];
      d.shift();
      temp = temp.next;
    }
  }

  // Driver code
  var head = null;
  head = push(head, 10);
  head = push(head, 9);
  head = push(head, 8);
  head = push(head, 7);
  head = push(head, 6);
  head = push(head, 5);
  head = push(head, 4);
  head = push(head, 3);
  head = push(head, 2);
  head = push(head, 1);

  document.write("Given linked list: ");
  printList(head);

  evenOdd(head);

  document.write("<br>After rearrangement: ");
  printList(head);