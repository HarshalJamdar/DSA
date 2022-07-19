function map(arr){
    let map= new Map()
    for(let i=0;i<arr.length;i++){
       if(map.get(arr[i])==undefined) map.set(arr[i],1)
       else map.set(arr[i],map.get(arr[i])+1)
    }
 
    for(let i of map){
       console.log(i[0],">>>",i[1])
    }
    return map
 }
 console.log(map([1,6,3,4,5,3,4,2,7,3]))