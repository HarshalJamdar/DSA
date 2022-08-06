function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let curr=i
        //console.log(curr,arr)
        while(curr>=1 && arr[curr-1]>arr[curr]){
            [arr[curr-1],arr[curr]]=[arr[curr],arr[curr-1]]
            //console.log(">>>",arr)
            curr--
        }
    }
    return arr
}

console.log(insertionSort([5,4,6,2,9]))

/*
1 [ 5, 4, 6, 2, 9 ]
>>> [ 4, 5, 6, 2, 9 ]
2 [ 4, 5, 6, 2, 9 ]
3 [ 4, 5, 6, 2, 9 ]
>>> [ 4, 5, 2, 6, 9 ]
>>> [ 4, 2, 5, 6, 9 ]
>>> [ 2, 4, 5, 6, 9 ]
4 [ 2, 4, 5, 6, 9 ]
[ 2, 4, 5, 6, 9 ]
*/
