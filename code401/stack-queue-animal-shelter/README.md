# AnimalShelter

<!-- Short summary or background information -->

Using a Queue as the underlying data storage mechanism, implement AnimalShelter class.

## Challenge

<!-- Description of the challenge -->

Create a class called AnimalShelter which holds only dogs and cats.
The shelter operates using a first-in, first-out approach.

## Whiteboard Process

<!-- Embedded whiteboard image -->

![img](./shelter.png)

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

In short, O(1) means that it takes a constant time, like 14 nanoseconds, or three minutes no matter the amount of data in the set.

- enqueue: big O(1)
  let given animal point at front and front equl given animal.
- dequeue: big O(n)
  We iterate from first to last untill the current animal equl the preferred animal which may cost big O of n, after finding preferred animal let prev animal point to next animal.

## API

<!-- Description of each method publicly available to your Linked List -->

- enqueue(animal)
  `enqueue animal to Animalshelter calls, that can be either a dog or a cat object O(1)`
- dequeue
  `dequeue prefered animal and return either a dog or a cat, based on preference, If pref is not "dog" or "cat" then return null`
