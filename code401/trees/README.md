# Tree
<!-- Short summary or background information -->
a hierarchical structure as elements in a Tree are arranged in multiple levels.
## Challenge
<!-- Description of the challenge -->
- Create a Binary Tree class
- Create a Binary Search Tree class
## Whiteboard Process
<!-- Embedded whiteboard image -->
![img](./tree.png)
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
The time complexity for Search for element or inserting an element to the list is O(log n) that because it halves the input set in each iteration, we ignore half of nodes each iteration
preOrder & inOrder & postOrder: O(n)

## API
<!-- Description of each method publicly available to your Linked List -->

- preOrder ` root -> left -> right `
- inOrder ` left -> root -> right `
- postOrder ` left -> right -> root `
- add ` add node to tree`
- contains ` check if tree contains a value `
