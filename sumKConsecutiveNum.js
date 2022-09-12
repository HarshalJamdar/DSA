

function sumKconNum(arr,k){
    if(arr.legth<k) return;
    let currMax=-Infinity;

    for(let i=0;i<arr.length-k;i++){
        let sum=0
        for(let j=i; j<k+i; j++){
         sum += arr[j]  
        }
        if(sum>currMax) currMax=sum
    }
    return currMax
}

console.log(sumKconNum([1,2,8,67,7,0,8,57,9],4))

//==============================================//

