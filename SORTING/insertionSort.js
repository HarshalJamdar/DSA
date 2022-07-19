const sorted=(arr)=>{
    for(let i=1; i<arr.length;i++){
        let cur = arr[i]
        let j=i-1
        while(j>=0 && arr[j]>cur){
        arr[j+1]=arr[j]
        j--
        }
        arr[j+1]=cur
    }
    return arr
}
const res = sorted([6,4,5,2,2,9])
console.log(res)