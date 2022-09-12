//2 3 4 -4 -3 7 8 9 => Yes  
//1 2 3 5 6 7 => No
//1 -1 2 3 4 -7 => yes
// key=>value ------> 2 5 9 5 2 9 17 26
// 5=>2
function isSumZero(arr){
    for(let i=0;i<arr.length;i++){
      let sum=0;
      let j = i;
      while(j<arr.length){
        sum += arr[j];
        if(sum === 0) return "yes";
        else j++;
      }
    }
    return "no"
  }
  
  console.log(isSumZero([2, 3, 4, -4, -3, 7, 8, 9]))
  console.log(isSumZero([1, 2, 3, 5, 6, 7]))
  
  //here TC is O(n^2), we can optimize it to O(n).
  //[2, 3, 4, -4, -3, 7, 8, 9] ------> 2 5 9 5 2 9 17 26, check addition at each index if addition is repeating it means there sum is comming zero.
  //we can map it or use set for this 2 5 9 5 2 9 17 26, if repeating nums then yes or no.
  