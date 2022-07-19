// print till 1000 prime number.

function isPrime(num){ 
    for(let i=2;i<=parseInt(num/2);i++){ //
        if(num%i===0) return false
    }
    return true
}

function primeNum(){
    let count=0
    let n=2
    while(n<1000){
        if(isPrime(n)){
            count++
            console.log(`${count} prime number is ${n}`)
        }
        n++
    }
}
primeNum()