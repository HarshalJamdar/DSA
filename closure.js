// closure : When inner function preserves variables of outer function this proccess is called Closure. So basically closure retain the variables of it's parent scope.

function name1(){
    let count=0;
    return function (){
        console.log(`${count++} count`)
    }
}

let counter=name1();
counter()
counter()
counter()


function x(){
    setTimeout(
        ()=>console.log(i),0
    )
    var i=10
}
x();

