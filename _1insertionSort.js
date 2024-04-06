// run file ---> node _1insertionSort.js

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let curr=i;
        while(curr>=1 && arr[curr-1]>arr[curr]){
            [arr[curr-1],arr[curr]]=[arr[curr],arr[curr-1]];
            curr--;
        }
    }
}

const arr=[3,8,0,6,4,8,5,3,2,9,9];
const arr2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
insertionSort(arr);
console.log(arr);

//=== EXPLAIN IN INTERVIEW ===//

// Time Complexity: O(n^2) in the worst-case, O(n) in the best-case.
// Space Complexity: O(1)

// Time Complexity: In the worst-case scenario, where the input array is in reverse sorted order, 
// the time complexity of the Insertion Sort algorithm is O(n^2), where n is the number of elements in the array. 
// This is because for each element in the array, it may have to traverse all the elements to its left to find 
// its correct position, resulting in nested iterations.

// However, in the best-case scenario, where the input array is already sorted, 
// the time complexity reduces to O(n), as each element only needs to be compared to its predecessor once, 
// and no swaps are required.

// Space Complexity: The space complexity of the Insertion Sort algorithm is O(1)
//  because it sorts the elements in place without requiring additional space proportional to the input size. 
//  It achieves this by performing swaps directly within the input array without allocating additional memory.

//=== EXPLAIN IN INTERVIEW ===//

// The insertionSort function is a sorting algorithm that works by iteratively building up a sorted portion of an array. Let me walk you through it step by step."

// Overview:
// "Insertion Sort works by dividing the input array into two parts: a sorted part and an unsorted part. Initially, the sorted part contains the first element of the array, and the unsorted part contains the rest. It then picks elements from the unsorted part and inserts them into their correct position in the sorted part."

// Iteration Over the Array:
// "The function starts iterating over the array from the second element, i = 1, to the last element. This is because we already consider the first element as a sorted part of the array."

// Current Element and Inner Loop:
// "For each element at index i, we consider it as the current element (curr). We then enter a while loop that iterates backward from the current element towards the beginning of the array (curr - 1) as long as the current element is smaller than the element before it."

// Swapping Elements:
// "Within the while loop, if the previous element is greater than the current element, we swap them. We continue this process until the current element is no longer smaller than the previous element or until we reach the beginning of the array."

// Continuation and Completion:
// "This process continues for each element in the array, effectively building up the sorted portion of the array until all elements are sorted in ascending order."

// Time and Space Complexity:
// "In terms of time complexity, the Insertion Sort algorithm has a worst-case time complexity of O(n^2) and a best-case time complexity of O(n). The space complexity is constant at O(1) since it sorts the array in place without requiring additional memory."


//====================================================================================================//

//=== Working ===//
// The insertionSort function takes an array arr as input.
// It iterates over the array starting from the second element (index 1) up to the last element.
// For each element at index i, it considers the element at index i as the current element (curr).
// It then iterates backwards from the current element (curr) towards the beginning of the array (curr - 1) as long as the current element is smaller than the element before it.
// Within this loop, it swaps elements if the element before the current element is greater.
// It continues this process until the current element is no longer smaller than the previous element or until it reaches the beginning of the array.
// Once the inner loop ends, the next element in the outer loop is considered.

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){ // Iterate over array starting from the second element
        let curr = i; // Set current index
        while(curr >= 1 && arr[curr - 1] > arr[curr]){ // Inner loop to move the current element to its correct position
            [arr[curr - 1], arr[curr]] = [arr[curr], arr[curr - 1]]; // Swap current element with the previous one
            curr--; // Move to the previous index
        }
    }
}

const arr1 = [9, 8, 7, 6, 5, 4, 3, 2, 1]; // Sample array
insertionSort(arr1); // Sort the array using insertion sort
console.log(arr1); // Output the sorted array

// 1. i=1, curr=1, 1>=1 && arr[1-1]>arr[1], curr=0, 0>=1, i++
// 2. i=2, curr=2, 2>=1 && arr[2-1]>arr[2], curr=1,  curr=1, 1>=1 && arr[1-1]>arr[1], curr=0, 0>=1, i++
// 3. i=3, curr=3, 3>=1 && arr[3-1>arr[3], curr=2, 2>=1 && arr[2-1]>arr[2], curr=1,  curr=1, 1>=1 && arr[1-1]>arr[1], curr=0, 0>=1, i++
// ]

//=====================================================================================================================//


const revereseInsertionSort = (arr) => {
    for(let i = arr.length-1; i >=0 ; i--){
        let curr = i;
        while(curr<=arr.length && arr[curr]<arr[curr+1]){
            [arr[curr], arr[curr+1]] = [arr[curr+1], arr[curr]]
            curr++
        }
    }
}

let arr3 = [1,2,3,4,5,6,7,8,9]
revereseInsertionSort(arr3) 
 console.log(arr3)

 // output: [9, 8, 7, 6, 5, 4, 3, 2, 1]
