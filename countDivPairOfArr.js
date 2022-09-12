//Find pairs which are divisible and return count of such pairs.

function countPair(arr){
    let count=0,i=0,j=1
    while(i!=arr.length){
        if(arr[i]%arr[j]===0 || arr[j]%arr[i]===0) count++;
        j++;
        if(j>=arr.length){
            i++;
            j=i+1;
        }
    }
    return  count;
}
console.log(countPair([2,4,3,5,6,7])); //2,4   2,6   3,6   op=>3

