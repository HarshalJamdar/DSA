function binarySearch(arr,target){ //array, targeted number
    let min=0, max=arr.length-1;
    while(min<=max){
        let mid=Math.floor((min+max)/2);
        //console.log(mid)
        if(arr[mid]<target) min=mid+1;
        else if(arr[mid]>target) max=mid-1;
        else return mid;
    }
    return [-1,-1];
}

console.log(binarySearch([2,3,4,5,5,6,7,9,10],9))
console.log(binarySearch([2,3,4,5,5,6,7,9,10],8));

