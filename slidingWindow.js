//Q1 : Given an array of size n, find the max value in a current window of size w.
//NOTE: total number of window form of size w in an array having size n is (n-w+1)
function maxValueWin(arr,w){
   let n = arr.length
   let result = [] 
   let temp = []
   for(let crrElmn=0; crrElmn<w;crrElmn++){
       while(temp.length>0 && arr[crrElmn]>=temp[temp.length-1]){
        temp.pop()
       }
       temp.push(crrElmn)
   }
   for(let crrElmn=w; crrElmn<n;crrElmn++){
    result.push(arr[temp[0]])

    while(temp.length>0 && arr[crrElmn]>=temp[temp.length-1]){
        temp.pop()
    }
    while(temp.length>0 && crrElmn-w>=temp[0]){
        temp.shift()
    }
    temp.push(crrElmn)
   }
   result.push(arr[temp[0]])
   return result
}

console.log(maxValueWin([3,1,-1,-3,5,3,6,7],3))
//not working
//===============================================================//

// function maxCharWin(arr,w){
//     let i=j=0, max = -Infinity, temp=[], result=[]

//     while(j<arr.length){
//          temp.push(arr[j])
//          if(j-i+1<w) j++
//          else if(j-i+1==w){
//         for(let el=0;el<temp.length;el++){
//             if(temp[el]>max){
//                  max = temp[el]
//                 result.push(max)

                
//                 i++
//                 j++
//                 }

//           }         
//         }
//     }

//     return result
// }
// console.log(maxCharWin([12,3,5,7,8,4,6,3,9,10,15],3))
//=========================================================//

//Q2: Find the maximum sum for window size 3.

// function maxSum(arr,k){
//     let i=0,j=0,sum=0,max=0

//     while(j<arr.length){
//         sum = sum + arr[j]
//         if(j-i+1<k) j++
//         else if(j-i+1==k){
//             max = Math.max(max,sum)

//             sum = sum -arr[i]
//             i++
//             j++
//         }
//     }
//     return max
// }
// console.log(maxSum([7,19,2,4,5,9],3))

//==========================================================//

//Q3 : Find 1st negative integer in every window of size k. Print 0 when there is no negative number in the window.

// function findMax(arr,k){
//     let i=0,j=0,list=[],ans=[]
//     while(j<arr.length){
//         if(arr[j]<0) list.push(arr[j])
//         if(j-i+1<k) j++
//         else if(j-i+1==k){
//             ans.push(list[0])
//             if(list[0]==arr[i]) list.splice(0,1)
//             i++
//             j++
//         }
//     }
//     return ans
// }
// console.log(findMax([8,-5,-8,-6,3,5,2],3))

//condition for non-negative window not done.

//=============================================================//
