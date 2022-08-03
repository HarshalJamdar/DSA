



function getCorrectPositionOfPivot2(arr,low,high){
    let left=low, right=high, pivot=arr[high] //here pivot is right most element
    while(left<right){
        while(left<right && arr[left]<pivot){
            left++;
        }
        while(left<right && arr[right]>=pivot){
            right--;
        }
        if(left<right){
            [arr[left],arr[right]]=[arr[right],arr[left]]
        }
    }
    [arr[left],arr[high]]=[arr[high],arr[left]];
    return left;
}

function quickSort(arr,left,right){
    if(left>right) return; //base condition for recursion to stop
    let currPositionOfPivot=getCorrectPositionOfPivot2(arr,left,right)

    //left side of pivot
    quickSort(arr,left,currPositionOfPivot-1)

    //right side of pivot
    quickSort(arr,currPositionOfPivot+1,right);
}

let arr=[7,3,6,2,4,-1,5,6]
quickSort(arr,0,arr.length-1)
console.log(arr)