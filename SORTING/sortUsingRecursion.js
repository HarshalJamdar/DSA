//* RECURSION : When function call itself.
//-> If a function call itself , then there must be an end point.
//-> Otherwise it will get called for infinite times.

let myNewList = []
let i = 0, j = 1;
function isSorted(array){ // here function to check if array is sorted or not.
    for(let i=0; i<array.length;i++){
        if(array[i]>array[i+1]){ 
            return false
        }
    }
    return true 
}


function sortCheck(array){
   if(isSorted(array)){ //here we are checking if the array is already sorted or not, before applying sorting condition.
    myNewList = array;
    return;
   }else if(array[i]<=array[j]){ // if this condition satisfy then, nothing changes and we moves to the next elements.
     i++;
     j++;
     sortCheck(array); // recursion
   }else{  // here we are swapping places of the element, smaller element will come  first then bigger element will come.
    [array[i],array[j]]=[array[j],array[i]]
    i=0; // looping again from the start , as element place changed.
    j=1;
    sortCheck(array); // recursion
  }
}
sortCheck([2,3,1,4,9,6,0,3,4,4,4]) //first call
console.log(myNewList)