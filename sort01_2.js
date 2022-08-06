function sort01(arr){
    let index=0, count0=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0) count0++;
    }

    let count1=arr.length-count0
    while(count0>0){
        arr[index]=0
        count0--
        index++
    }

    while(count1>0){
        arr[index]=1
        count1--
        index++
    }

    return arr
}

console.log(sort01([1,0,1,1,1,0,0,0]))