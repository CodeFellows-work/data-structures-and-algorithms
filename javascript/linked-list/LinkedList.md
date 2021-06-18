# Singly Linked List
singly linked lists - The simplest type of linked list can only go in one direction - from the Head to null.

## Challenge
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.

Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.

Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"

Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).

## Approach & Efficiency

for the insert i will initialize the method and pass in the value and the code will get the head for that particular node and create a new Node with the value that is passed.
The includes method will check for a boolean data type from the value that is passed in. We will initialize a variable representing the current node and that current node will be checked with a while loop. 
The toString method will initialize an array and the current node given from the head of that particular node and will push that value of the node which will then be checked through a for loop, if the node in fact returns as a string.  

This should be O(1) as it has a constant time meaning "n" does not grow.
