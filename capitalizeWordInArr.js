//Q 1 : Capitalize first letter og word in Array.

function capWord(arr){
    if(arr.length==0) return []
    let res=[]
    let s=arr[0][0].toUpperCase()+arr[0].slice(1)
    res.push(s)
    return res.concat(capWord(arr.slice(1)))
}

console.log(capWord(["abc","def","ijk"]))