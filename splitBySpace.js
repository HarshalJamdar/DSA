
function split(str){
    let arr=[]
    for(let i=0;i<str.length;i++){
       if(str[i]!==" ") arr.push(str[i])
    }
    return arr
 }
 console.log(split("welcome to home"))

//==========================================================//

 function splitStr(str){
    let i=0,j=0, arr=[]
    while(j!=str.length){
        if(str[j]===" "){
            console.log(str.slice(i,j))
            i=j+1
        }
        j++
    }
    console.log(str.slice(i,j))
 }

 splitStr("welcome to home")