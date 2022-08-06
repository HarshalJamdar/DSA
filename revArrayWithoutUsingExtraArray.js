//Q 1 : Reverse the array.

function reverse(arr){
    let a=arr.length, left=0,right=a-1
    while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]]
        left++
        right--
    }
    return arr
}
console.log(reverse([9,0,6,7]))