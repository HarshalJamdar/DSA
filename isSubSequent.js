function isSubSequent(a1, a2){
     let j = 0;
        for(let i=0;i<a1.length;i++){
            if(a1[i]===a2[j]) j++;
        }
        return j === a2.length;
    }


let a1 = [1,2,3,4]
let a2 = [1,3]
console.log(isSubSequent(a1,a2))
