//Q1 : Sum of n natural number.

function sumNatural(n){
    if(n<=0){
        return "It is not a natural number"
    } else if(n===1){
        return 1
    }
    return n + sumNatural(n-1)
}

console.log(sumNatural(10)) //1+2+3+4+5+6+7+8+9+10 = 55

//==============================================//

//Q2 : Sum of n even numbers.

function sumEven(n){
    if(n===0) return 0
    else if(n<0) return "No Sum"
    return 2*n-2+sumEven(n-1) 
}

console.log(sumEven(5)) // 0+2+4+6+8 = 20

//==============================================//

//Q3 : Find the factorial.

function factorial(n){
    if(n<=0) return "invalid input"
    if(n==1) return 1
    return n* factorial(n-1)
}

console.log(factorial(5)) //120

//===============================================//

//Q4 : Take 'n' input and find the n'th number in the fibonacci series.

function fibo(n){
    if(n<=2) return 1
    return fibo(n-1)+fibo(n-2)
}

console.log(fibo(7)) // 1,1,2,3,5,8,13 = 13

//============================================//

//Q5 : Find the product of an array.

function product(arr){
    if(arr.length==0) return 1
    return arr[0]* product(arr.splice(1))
}

console.log(product([1,2,3,4])) //1*2*3*4 = 24

//==========================================//

//Q6 : Find given power of given number.

function power(n,exp){
 if(exp==0) return 1
 return n*power(n, exp-1)
}

console.log(power(3,2)) //3^2 = 9

//=========================================//

//Q7 : Find the reverse of the string.

function rev(str){
    if(str.length<=1) return str
    return rev(str.slice(1)) + str[0]
}

console.log(rev("Hi There")) //erehT iH

//==========================================//

//Q8 : Find if the string is Palindrom or not.

function isPalindron(str){
    if(str.length<=1) return true
    if(str[0]==str.slice(-1)) return isPalindron(str.slice(1,-1))
    else return false
}

console.log(isPalindron("refer"))
console.log(isPalindron("1223221"))

//============================================//

//Q9 : Flatten the array.

function flattenArr(arr){
    let flat = []
    for(let i=0; i< arr.length; i++){
        if(Array.isArray(arr[i])==false) flat.push(arr[i])
        else flat = flat.concat(flattenArr(arr[i]))
    }
    return flat
}

console.log(flattenArr([1,4,[5,3],[[8]]])) //[ 1, 4, 5, 3, 8 ]

//============================//

//Q10 : Find the given power for given integer.

var myPow = function(x, n) {
    if(n==0) return 1
    if(n>0)return x*myPow(x, n-1)
    if(n<0)return 1/x*myPow(x, n+1)
};
console.log(myPow(2,-2)) // 0.25
console.log(myPow(2,2)) // 4

//=============================================//

//Q 11 : Capitalize first letter of word in Array.

function capWord(arr){
    if(arr.length==0) return []
    let res=[]
    let s=arr[0][0].toUpperCase()+arr[0].slice(1)
    res.push(s)
    return res.concat(capWord(arr.slice(1)))
}

console.log(capWord(["abc","def","ijk"])) //['Abc', 'Def','Ijk']