//Not best practice
let person1 = {
    fname : "Harshal",
    lname : "Jamdar",
    printfullName : function(){
        console.log(this.fname + " " + this.lname)
    }
}
person1.printfullName()
person1.printfullName.call({fname: 'Madhuri',lname: 'Jamdar'})

//===========================//

//Best practice is we don't write method(function) inside object, we write them seperatly and then call them.
let person = {
    fname : "Harshal",
    lname : "Jamdar"
}

let printfullName = function(){
    console.log(this.fname + " " + this.lname)
}

//extra parameters add
let printfullName1 = function(hometown,state){
    console.log(this.fname + " " + this.lname + " from "+ hometown +", " + state)
}

printfullName.call(person)
printfullName.call({fname: 'Madhuri',lname: 'Jamdar'})
printfullName1.call({fname: 'Madhuri',lname: 'Jamdar'},"Khamgaon","Maharashtra")

//NOTE : using call methode we can burrow functions from other object(function burrowing),and use it with data of other object.
//====================================================================//

//NOTE : 1. Only difference between call() and apply() method is how we pass argument.
//2. In apply methode we pass argument in Array.

printfullName1.apply({fname: 'Madhuri',lname: 'Jamdar'},["Khamgaon","Maharashtra"])

//===================================================================//

//NOTE : bind() method binds function with a object and return copy of that function which we can call later.

let printMyName = printfullName.bind(person)
printMyName()

// Here it is creating copy of printFullName and binding to person object and returning a function. It is not directly calling the function rather it is returning function which we can call later.

//====================================================================//