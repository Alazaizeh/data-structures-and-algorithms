# Singly Linked List
<!-- Short summary or background information -->
A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers.
## Challenge
<!-- Description of the challenge -->
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node, and Create a Linked List class with the given functions
## Whiteboard Process
<!-- Embedded whiteboard image -->
![img](./cc.png)
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
 The complexity of the functions increase linearly and in direct proportion to the number of inputs.
- apend: big O(n)
- includes: big O(n)
- toString: big O(n)
- insertBefore: big O(n)
- insertAfter: big O(n)
- kthFromEnd : big O(n)
- zipLists : big O(n)
## API
<!-- Description of each method publicly available to your Linked List -->

- apend
     ` Adds a new node with that value to the head of the list with an O(1) Time performance.`
- includes
     ` Indicates whether that value exists as a Node’s value somewhere within the list.`
- toString
     `Returns: a string representing all the values in the Linked List`
- insertBefore
     `Adds a new node with the given new value immediately before the first node that has the value specified`
- insertAfter
     `Adds a new node with the given new value immediately after the first node that has the value specified`
- kthFromEnd
     `Return the node’s value that is k places from the tail of the linked list.`
- zipLists
     `Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list.`
