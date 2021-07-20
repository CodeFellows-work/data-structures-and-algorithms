# Trees - 
Fizz Buzz
# Challenge

Determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:

If the value is divisible by 3, replace the value with “Fizz”
If the value is divisible by 5, replace the value with “Buzz”
If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
If the value is not divisible by 3 or 5, simply turn the number into a String.

## Algorithm 

The first step is to determine the travesal method of the tree. In this case, the traversal method is not specified and therefore I will choose to use a preOrder traversal that will check the left then the right. Once the tree has been determined that it is not empty, I will check the left node and compare it with a statement asking if it is divisible by either 3 or 5 - AND 3 and 5. If it is divisible by 3 I will change the value of that node to fizz, and if it is divisible by 5, I will change the value to buzz. If it is divisible by 3 and 5 it will be changed to fizzBuzz. After the traversal is complete - I will return the tree with the changed node values. 

1. The traversal = preOrder 
if there is a root value continue the traversal and check for the left.
2. if there is a left node then check the value to see if it is 3 || 5 or 3 && 5.
3. do the same on the right node. 
4. if any of the values are present, then change the value to be either fizz, buzz, or fizzbuzz. 
5. return the tree with the changed values.

## visual 


