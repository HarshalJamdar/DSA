function binarySearch(nums,target){ //array, targeted number
    let min=0, max=nums.length-1
    while(min<=max){
        let mid=Math.floor((min+max)/2)
        if(nums[mid]<target) min=min+1
        else if(nums[mid]>target) max=mid-1
        else return mid
    }
    return [-1,-1]
}