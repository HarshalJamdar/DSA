// //Q1 : Given an array, filter duplicate elements and give unique elements in arr.

function distinct(arr){
    let map = new Map()
    for(let i=0; i<arr.length;i++){
        if(map.get(arr[i])==undefined) map.set(arr[i],1)
        else map.set(arr[i],map.get(arr[i])+1)
    }

    let res=[]
    for (let pairs of map){
        if(pairs[1]==1) res.push(pairs[0])
    }
    return res
}

console.log(distinct([2,3,2,5,6,4,5,5,5]))
