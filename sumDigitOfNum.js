

function sumDigit(num){
    if(num<10) return num
    return num%10+sumDigit(parseInt(num/10))
}
console.log(sumDigit(12345))

//======================================//

function sumDigit2(num){
    let sum=0
    while(num!=0){
        sum += num%10
        num=parseInt(num/10)
    }
    return sum
}
console.log(sumDigit2(12345))

//=====================================//