

function missingnum(arr){
    let maxNum = Math.max(...arr)
    let totalSum=0

    for(let i=0;i<arr.length;i++){
        totalSum += arr[i]
    }

    return (maxNum*(maxNum+1)/2)-totalSum
}

console.log(missingnum([1,2,3,6,5,7]))

//mathematical formula for sum of 1 to n numbers is = n*(n+1)/2