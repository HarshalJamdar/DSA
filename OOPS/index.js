
// creating object using object litrals:
const circle = {
    radius : 1,
    location : {
        x : 1,
        y : 1
    },
    draw : function(){
        console.log('draw');
    }
};
circle.draw();
//In js object all these keys are refer as properties whether they are function or not. but technically in oop properties and methods are fundamentally different because a property is used to hold values and a function/method is used to define some logic. 

// If object has one or more method we say that the object has behavior.
//Creating object with object literal syntax is an issue only if that object has behavior. Solution to this is to use a factory or a constructor function.

//creating object using factory method :
function createCircle(radius){
    return {
        radius,     //ES6 feature : if key and value are the same, we only write key.
        draw : function(){
            console.log('draw');
        }
   }
}
const circle1 = createCircle(1);
circle1.draw();

//creating object using constructor function :
// here 'this' is basically a reference to the object that is executhing this piece of code.
class Circle {
    constructor(radius) {
        //console.log('this', this)
        this.radius = radius;
        this.draw = function () {
            console.log('draw');
        };
    }
}
const circle2 = new Circle(1); //if we forget using new operator, circle2 will get defined in global object which is bad practice because they are available everywhere in our application, so it is possible that one function or another will modify the value of this variables accidentally and create bug in our application.

//When we use the 'new' operator to call a function three things happen- first,this 'new' operator will create an empty object. second, it will set 'this' to point to that object. third, it will return that object from the function.(that's why we are not writing return explicitly here, it happen automatecally when we use 'new' operator.)

///================================================//

//every object in js has a property called constructor and that references the function that was used to construct or create objects.
//when we create an object using the object literal syntax, internally the js engine uses this constructor function.

//=================================================//

//In js everything is object, even function.
//when we declare function using syntax, internally js engine will use the function constructor to create this object.

//=================================================//

//premitives : Number, String, Boolean, Symbol, undefined, null
//reference : Object, Function, Array

let x = 10;
let y = x;
x = 20; // output : x=20, y=10

let a = { value : 10};
let b = a;
a.value = 20; // output : a = { value : 20 }, b = { value : 20 }

//Primitives are copied by their value.
//Objects are copied by their reference.

//==================================================//

//object in js are dynamic, that means after you creating them you can add extra properties in them or delete some properties.

