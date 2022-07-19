// Find element without pair in array.

function withoutPair(arr){
    let map= new Map()
    for(let i=0;i<arr.length;i++){
       if(map.get(arr[i])==undefined) map.set(arr[i],1)
       else map.set(arr[i],map.get(arr[i])+1)
    }

    for(let val of map){
        if(val[1]%2===1) console.log("Without pair number is",val[0]) 
    }
}
withoutPair([1,2,3,2,1,5,7])