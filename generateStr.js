//convert an array in string in such a way that key will have 1,2,3,4 and values as like


function generateString(number){
    let alpha='abcdefghijklmnopqrstuvwxyz'
    let result=''
    let i=0
    while(i<number){
        result+= alpha[i%26]
        i++
    }
    return result
}
let final=generateString(5)
console.log(final)