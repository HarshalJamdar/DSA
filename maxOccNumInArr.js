// Find the majority element in array.(max times occuring element)

function maxNum(arr){
    let map = new Map()
    for(let i=0;i<arr.length;i++){
       if(map.get(arr[i])==undefined) map.set(arr[i],1)
       else map.set(arr[i],map.get(arr[i])+1)
    }
 
    let max = 0, max_char=0
    for(let pairs of map){
       if(pairs[1]>max) {
           max=pairs[1]
           max_char=pairs[0]
       }
    }
    return [max_char,">>>",max]
 }
 
 console.log(maxNum([1,3,3,2,4,2,3,2,2]))


