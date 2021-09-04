# Max Stack
<!-- Short summary or background information -->
 a Stack with an additional getMax() member function which returns the ‘biggest’ element in the Stack.
 ## Challenge
<!-- Description of the challenge -->
write a ‘Max Stack’ which is defined as a Stack with an additional getMax() member function which returns the ‘biggest’ element in the Stack.
## Whiteboard Process
<!-- Embedded whiteboard image -->
![img](./cc.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
In short, O(1) means that it takes a constant time, like 14 nanoseconds, or three minutes no matter the amount of data in the set, push with check if pushed element is grater than the max and change the max if it is
the function pop time complexity O(n) increase linearly and in direct proportion to the number of inputs, becuse each time we pop element we calculate the max element in the stack again by iterating throgh all elements.

- pop: big O(n)
- push : big O(1)
- isEmpty: big O(1)
- peek: big O(1)

## API
<!-- Description of each method publicly available to your Linked List -->
- pop
`returns the value from node from the top of the stack and removes the node from the top of the stack`
- push
`adds a new node with that value to the top of the stack with an O(1) Time performance`
- isEmpty
`Returns: Boolean indicating whether or not the queue or stack is empty`
- peek
`returns Value of the node located at the front of the queue and the top of the stack`
