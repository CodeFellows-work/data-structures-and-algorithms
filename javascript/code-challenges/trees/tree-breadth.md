# Trees - BFS breadth first search

# Challenge
Feature Tasks
Write a function called breadth first
Arguments: tree
Return: list of all values in the tree, in the order they were encountered
NOTE: Traverse the input tree using a Breadth-first approach

Example
Input
example
![BFS](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-17/binary-tree.png)
Output
[2,7,5,2,6,9,5,11,4]

## Approach & Efficiency
First we must travel to the children of the root to get the first of the breadth starting from the left, then to the right child of the root. for each node we travel to, we will push the number into an array. In terms of traversal if the nodes are structured similarly to the example above, you can see how the traversal will start with the first children of the root which is 7 (left first) then to 5. Then we will travel back to the left because it is not null - which is 2. Then to 6 then 9 - which will finish off the children of the first breadth children. Now we will start to traverse to the children of those children whcih again will start on the left so 5, 11, and then 4. for this to happen without going through the whole tree again or to not have duplicates in the new array, we can use the shift method to return the value to push it into the new array and then get rid of it from the tree that is also in an array. A while loop can be used to include a call back for the shifting that will loop until the tree < = 0. 

1. def breadthFirst function that will take the tree, and a callback as its arguments. 
2. We can return a console log stating empty if the tree is empty
3. put the tree that has been passed into an array and instantiate a new variable for it
4. use a while loop to loop through the array until the length of the tree array is < 0 
and within the while loop we can shift the value of each node and then return the value through a callback or we can define a new array - either can be used to return the final array output
5. conditional if statement to check if left node is null AND if right node is null so that we can just return if they are
6. if the left node is not null we will push the value of that node into another array or the callback 
7. repeat step 6 but with the right node
8. return the new array or use the callback with the function

visual
![bsf](./bfs.jpg)

## breadthFirst



