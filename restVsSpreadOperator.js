
//Rest Operator : It is useful in variadic function.(Taking a variable number of arguments; especially, taking arbitrarily many arguments) 
function myBio(name,lname,gender,...hobby){
    return {
        name,
        lname,
        gender,
        hobby
    }
}

let res = myBio("harshal","jamdar","female","reading","music","walking","drawing","singing")
console.log(res)



//Spread Operator : To copy object(array) OR To concate object(array).

let A = {
    a : "a",
    b : "b"
}

let B = {...A}
console.log(B)


let C = {
    c : "c",
    d : "d"
}
let D = {...A, ...C}
console.log(D)

//MultiLine string using back-ticks. 

let str = `

NOW
OR
NEVER`
console.log(str)

//ES6 feature- arrow function, rest operator, spread operator, destructuring, template literals, object litrals, multi-line string, let,const.