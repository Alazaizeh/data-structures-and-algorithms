# Stacks and Queues
<!-- Short summary or background information -->
Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue.

## Challenge
<!-- Description of the challenge -->
Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

## Whiteboard Process
<!-- Embedded whiteboard image -->
![img](./cc.png)
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
 The complexity of the functions increase linearly and in direct proportion to the number of inputs.
- enqueue: big O(1)
- dequeue: big O(1)
- isEmpty: big O(1)
- peek: big O(1)
- pop: big O(1)
- push : big O(1)


## API
<!-- Description of each method publicly available to your Linked List -->
- enqueue
`adds a new node with that value to the back of the queue with an O(1)`
- dequeue
`returns the value from node from the front of the queue and removes the node from the front of the queue`
- pop
`returns the value from node from the top of the stack and removes the node from the top of the stack`
- push
`adds a new node with that value to the top of the stack with an O(1) Time performance`
- isEmpty
`Returns: Boolean indicating whether or not the queue or stack is empty`
- peek
`returns Value of the node located at the front of the queue and the top of the stack`

