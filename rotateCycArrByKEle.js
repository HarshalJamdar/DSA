//Cyclically rorate array by k elements.

function rotateCyc(arr,k){
   k = k%arr.length //if k>arr.length
   //console.log(k)
   
    let i=0,j=arr.length-1
    while(i<j){
       [arr[i],arr[j]]=[arr[j],arr[i]]
       i++
       j--
    }
    
    i=0,j=k-1
    while(i<j){ 
       [arr[i],arr[j]]=[arr[j],arr[i]] 
       i++
       j--
    } 
    
    i=k,j=arr.length-1
    while(i<j){
       [arr[i],arr[j]]=[arr[j],arr[i]] 
       i++
       j--
    }
   return arr
 }
 
 console.log(rotateCyc([12,3,6,2,9,11],2))//op: [9,11,12,3,6,2]
 console.log(rotateCyc([-1],2))
 console.log(rotateCyc([1,2,3],4))
//===============================================//

const rotate = function (nums,k){
    
   k = k%nums.length // if k > len(nums)

   // reverse entire array  [1,2,3,4,5] => [5,4,3,2,1]
   reverse(0,nums.length-1,nums);
   
   // reverse first k part => k = 2 => [5,4,3,2,1] => [4,5,3,2,1]
   reverse(0,k-1,nums);
   
   // reverse the remaining part => [4,5,3,2,1] => [4,5,1,2,3]
   reverse(k,nums.length-1,nums);
   return nums
}

function reverse(left,right,arr){
   while(left<right){
      [arr[left],arr[right]]=[arr[right],arr[left]]
       left++;
       right--;
   }
}

console.log(rotate([1,2,3,4,5],2)) //[ 4, 5, 1, 2, 3 ]