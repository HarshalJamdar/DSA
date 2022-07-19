// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.


var merge = function(nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    while (m < nums1.length) {  //removing extra zeros from the array.
        nums1.pop();
    }
    while (n < nums2.length) {   //removing extra zeros from the array.
        nums2.pop();
    }

    while (i < nums1.length && j < nums2.length) {
        if(nums1[i] <= nums2[j]) {
            i++;
        } else {
            nums1.splice(i, 0, nums2[j]); // add element at index i
            nums2.shift(); //remove element from the start, as removing element from 2nd array, no need of j++
        }
    }
    while(nums2.length) {
        const value = nums2.shift();
        nums1.push(value);
    }
    return nums1
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))