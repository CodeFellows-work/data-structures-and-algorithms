# Pseudocode

    ALGORITHM QuickSort(arr, left, right)

    if left < right

        // Partition the array by setting the position of the pivot value
        DEFINE position <-- Partition(arr, left, right)

        // Sort the left
        QuickSort(arr, left, position - 1)

        // Sort the right
        QuickSort(arr, position + 1, right)

    ALGORITHM Partition(arr, left, right)

        // set a pivot value as a point of reference
        DEFINE pivot <-- arr[right]

        // create a variable to track the largest index of numbers lower than the defined pivot

        DEFINE low <-- left - 1
        for i <- left to right do
            if arr[i] <= pivot
                low++
                Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right.
     Swap(arr, right, low + 1)

    // return the pivot index point
     return low + 1

    ALGORITHM Swap(arr, i, low)
        DEFINE temp;
        temp <-- arr[i]
        arr[i] <-- arr[low]
        arr[low] <-- temp

## For your own understanding, consider also stepping through these inputs:

[8,4,23,42,16,15]

* Reverse-sorted: [20,18,12,8,5,-2]
* Few uniques: [5,12,7,5,5,7]
* Nearly-sorted: [2,3,5,7,13,11]

## Implementation

Provide a visual step through for each of the sample arrays based on the provided pseudo code
Convert the pseudo-code into working code in your language
Present a complete set of working tests

### _Problem Domain_

Review the pseudocode above, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

### _Step-Through_

>*1st line*: 1st function QuickSort will have array, left, and right passed in

>*2st line*: If left is less than right

>*3nd line*: instantiate variable "position" and have it set to a function named "partition" with array, left, and right passed in

>*4rd line*: Recursive function Quicksort will pass in array, left, and position -1 to sort the left

>*5th line*: Recursive function Quicksort will pass in array, position +1, and right to sort the right

>*6th line*: 2nd function Partition will have array, left, and right passed in

>*7th line*: Instantiate "pivot" and set it to array[right]

>*8th line*: Instantiate "low" and set it to left - 1

>*9th line*: using a for loop, instatiate "i" and set it to from left to right

>*10th line*: if array at [i] is less than or equal to "pivot"

>*11th line*: low ++

>*12th line*: function swap will pass in array, i, and low

>*13th line*:  function swap will have array, right, and low + 1 passed in

>*14th line*: returning low + 1

>*15th line*:  3rd function Swap with array, i, and low passed in

>*16th line*: instantiate temp

>*17th line*: temp is set to array at [i]

>*18th line*: array at [i] is set to array at [low]

>*19th line*: array at [low] is set to temp

# Visual

