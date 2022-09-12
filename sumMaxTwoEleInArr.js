// Find maximum sum of any two lements in arrray.


function sumMaxEleOfArr(arr){
    let max=-Infinity, secMax=-Infinity
    let sum
    for(let i=0;i<arr.length;i++){
      if(arr[i]>max){
         secMax=max
         max=arr[i]
      }else if(arr[i]>secMax) secMax=arr[i]
    }
    console.log(max,secMax)
    return sum= max+secMax
}
console.log(sumMaxEleOfArr([12,4,67,2,34]))