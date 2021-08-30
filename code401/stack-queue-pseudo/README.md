# Challenge Summary
<!-- Description of the challenge -->
create a PseudoQueue class will implement our standard queue interface (the two methods listed below),
Internally, utilize 2 Stack instances to create and manage the queue.

## Whiteboard Process
<!-- Embedded whiteboard image -->
will be updated

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I used two stack where I push elements into the first stack 
and when dequeue called I pop all the elements from the first stack and push them into the second stack. 

enqueue: Big O(1)
dequeue: Big O(n)

## Solution
<!-- Show how to run your code, and examples of it in action -->
```
let newQueue = new PseudoQueue();
newQueue.enqueue(1);
[1]
newQueue.enqueue(2);
[1]->[2]
newQueue.enqueue(3);
[1]->[2]->[3]
newQueue.dequeue()
[2]->[3]
```
