function isValNum(int){
    let isNum=true
    for(let i=0;i<int.length;i++){
        if(int[i]>='0' && int[i]<='9') continue 
        else {
            isNum=false 
            break
        }
    }
    return isNum
}

console.log(isValNum("1234"))
console.log(isValNum("1234q"))

//==================================================//
function isNumber(int){
   const regex = new RegExp("^[0-9]+$")
   //const regex= /^-?[0-9]+$/ 
   return regex.test(int)
}

console.log(isNumber("1234"))
console.log(isNumber("1234q"))

//=================================================//