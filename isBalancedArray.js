// Q 1 : Given an unsorted array, check whether the array is balanced or not. If balanced return 1, if not return 0.

function isBalanced(arr){
    let sumLeft=0, sumRight=0, n=arr.length/2, a=arr.length
    if(a%2!=0) n+=1/2

    for(let i=0;i<n;i++){
        sumLeft += arr[i]
    }
    for(let i=a-1;i>=n;i--){
        sumRight += arr[i]
    }
    return sumLeft==sumRight ? 1 : 0
}

console.log(isBalanced([1,1,1,2,1]))