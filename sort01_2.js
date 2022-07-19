function sort01(arr){
    let curr=0, count0=0
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===0) count0++;
    }

    let count1=arr.length-count0
    while(count0>0){
        arr[curr]=0
        count0--
        curr++
    }

    while(count1>0){
        arr[curr]=1
        count1--
        curr++
    }

    return arr
}

console.log(sort01([1,0,1,1,1,0,0,0]))