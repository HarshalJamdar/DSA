function selectionSort(array){
    for(let i=0 ; i<array.length ; i++){
        let min = i;
        for(let j=i+1; j<array.length; j++){
            if(array[j]<array[min]) min=j;
        }
        if(i!==min){
        [array[i],array[min]] = [array[min],array[i]] 
        }
        //console.log(array)
    }
    return array
}
const res = selectionSort([2,2,3,4,4,4,4,4,4,2,2,3])
console.log(res)