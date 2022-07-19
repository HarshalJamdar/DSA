// Find sq root of the integer.

function squareroot(num,left,right){
    while(true){
    let mid=(left+right)/2  
    let mul=mid*mid  
console.log(mul,mid)               
     if(mul===num || (Math.abs(mul-num)<0.00001)) return mid
     else if(mul>num) right=mid
     else left=mid
    }
}

function findSqRt(num){
    let found=false 
    let i=1

    while(found===false){
        if(i*i===num){
            found = true 
           console.log( i)
        }
        else if(i*i>num){      
           var res=squareroot(num,i-1,i)
           found = true
           console.log (+res.toFixed(5) )
        }
        i++
    }
}
findSqRt(13)
findSqRt(16) 