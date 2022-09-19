


function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let curr=i;
        while(curr>=1 && arr[curr-1]>arr[curr]){
            [arr[curr-1],arr[curr]]=[arr[curr],arr[curr-1]];
            curr--;
        }
    }
}

const arr=[9,8,7,6,5,4,3,2,1];
insertionSort(arr);
console.log(arr);

