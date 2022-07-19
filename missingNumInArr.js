
//missing numbers in array in given rage(biggest element in array)

let arr=[1,5,6,7,15]
let max = Math.max(...arr)

let hash=[...new Array(max)].fill(false)
console.log(hash)
for(let index of arr){
    hash[index]=true
}
console.log('new',hash)
let res=[]
for(let i=1;i<=max;i++){
    if(!hash[i]) res.push(i) 
}

console.log(res)