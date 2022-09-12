  //Q 1 : Capitalize first letter of word in Array.
//TC :       SC : 
function capWord(arr){
    if(arr.length==0) return []
    let res=[]
    let s=arr[0][0].toUpperCase()+arr[0].slice(1)
    res.push(s)
    return res.concat(capWord(arr.slice(1)))
}

console.log(capWord(["abc","def","ijk"]))



function cap(arr){
  for(let i=0;i<arr.length;i++){
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1); 
  }
  return arr;
}
console.log(cap(["abc","def","ijk"]));

// let sum=[2,3,4].concat([5,6])
// console.log(sum)

// let string="A"+"hfgj"
// console.log(string)

