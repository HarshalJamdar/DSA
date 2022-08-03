function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, index1, index2) => {
      [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    };
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIndx = start;
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIndx++;
        console.log(">>>",swapIndx,i)
        swap(arr, swapIndx, i);
      }
    }
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIndx);
    console.log("new>>>",start,swapIndx,arr)
    return swapIndx;
  }
 
 function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
 } 
           
 console.log(quickSort([100,-3,2,4,6,9,1,2,5,3,23]))