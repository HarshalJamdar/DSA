let freq={}
let arr=['a','b','b','c','c','c','d','d','d','d']
for(let i=0;i<arr.length;i++){
    freq[arr[i]] = (freq[arr[i]] || 0) + 1
}
console.log(freq)

