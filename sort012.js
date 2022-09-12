function sort012(arr){
    let n = arr.length
    let left = 0, right = n - 1, i = 0;
    
    while(i <= right) {       
        if(arr[i] == 2) {
            [arr[i],arr[right]]= [arr[right],arr[i]]
            right--;
        }        
        else if(arr[i] == 0) {
             [arr[i],arr[left]]= [arr[left],arr[i]]
            left++;
        }
        else {
            i++;
        }
    }
    return arr
}
console.log(sort012([1,2,0,0,1]));