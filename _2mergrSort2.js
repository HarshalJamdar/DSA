

// function merge(arr,start,mid,end){
//     let arr1=[]
//     let arr2=[]

//     let lenArr1 = mid-start+1;
//     let lenArr2=end-mid;

//     for(let i=0; i<lenArr1;i++){
//         arr1[i]=arr[start+i]
//     }
//     for(let j=0;j<lenArr2;j++){
//         arr2[j]=arr[mid+j]
//     }

//     let a=0;
//     let b=0;
//     let c=start;

//     while(a<lenArr1 && b<lenArr2){
//         if(arr[a]<=arr1[a]){
//             arr[c]=arr1[a]
//             a++
//         }else{
//             arr[c]=arr2[b]
//             b++
//         }
//         c++
//     }

//     while(a<lenArr1){
//         arr[c]=arr1[a]
//         a++
//         c++
//     }

//     while(b<lenArr2){
//         arr[c]=arr1[b]
//         b++
//         c++
//     }
   
// }
// function mergeSort(arr,start,end){
//     if(start >= end) return;
//     let mid = Math.round((start-end)/2);
//     mergeSort(arr,start,mid)
//     mergeSort(arr,mid+1,end)
//     merge(arr,start,mid,end)
// }
// console.log(mergeSort([8,5,2,9,5,4,7,2,1]),0,9)
//=============================================================//

// JavaScript program for Merge Sort
 
// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r){
    let n1 = m - l + 1;
    let n2 = r - m;
 
    // Create temp arrays
    let L = new Array(n1);
    let R = new Array(n2);
 
    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
 
    // Merge the temp arrays back into arr[l..r]
 
    // Initial index of first subarray
    let i = 0;
 
    // Initial index of second subarray
    let j = 0;
 
    // Initial index of merged subarray
    let k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
 
// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr, l, r){
    if(l>=r){
        return;//returns recursively
    }
    let m =l+ parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
}

let arr=[8,5,2,9,5,4,7,2,1]
mergeSort(arr,0,arr.length-1)
console.log(arr)




























































