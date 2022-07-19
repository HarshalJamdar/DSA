
// BUBBLE SORT ALGORITHM: A sorting algorithm where the largest values bubble-up at the top. That is we take largest value (element) at the last in array in each iteration. 
// As we are already putting largest element at the last in each iteration, so we don't need to compare it. That's why we are reducing array length by one after each iteration.




function bubbleSort(array){
    for(let i=array.length; i>0; i--){
       let isSwapped;
       //let c = 0
       for(let j=0; j<i-1; j++){
           if(array[j]>array[j+1]){
               [array[j],array[j+1]] = [array[j+1],array[j]]
               isSwapped = true;
              //console.log("h",c++)
           }
       }
       //when array finaly sorted still inner loop will run continiously, code will not stop running. So to prevent it we have taken a flag called isSwapped. Now in sorted condition, when array goes to inner loop, 'if' codition will never saisfy and isSorted never become true it remail undefined becouse of line 3. And our next if condition works and it will break loop in sorted array condition.

       //console.log(isSwapped)
       if(!isSwapped){//when sorted array comes, isSwapped will be undefined and 'if' condition works and it will break loop.

        //console.log("stop")
           break;
       }
    }
    return array;
}

const res = bubbleSort([4,5,2,8,1,6])
console.log(res)



//output:

// h 0
// h 1
// h 2
// true
// h 0
// h 1
// true
// h 0
// true
// h 0
// true
// undefined
// stop
// [ 1, 2, 4, 5, 6, 8 ]