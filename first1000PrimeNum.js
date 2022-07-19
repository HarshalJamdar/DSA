//Print first 1000 prime.

function isPrime(num){ 
    for(let i=2;i<=parseInt(num/2);i++){ //
        if(num%i===0) return false
    }
    return true
}

function primeNum(){
    let count=0
    let n=2
    while(count<1000){
        if(isPrime(n)){
            count++
            console.log(`${count} prime number is ${n}`)
        }
        n++
    }
}
primeNum()