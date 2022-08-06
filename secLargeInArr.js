//Q1 : Find the second largest.

function secLarge(arr){
    let max = arr[0], secMax = -Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            secMax = max
            max = arr[i]
        }else if(arr[i]>secMax){
            secMax=arr[i]
        }
    }
    return secMax
}
console.log(secLarge([5,8,6,0,4]))

//========================================//



