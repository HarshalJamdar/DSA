
// Rotate string by k elements.

function rotate(str,k){
    str=str.split("")
    let res=[]
    for(let i=0;i<k;i++){
     res.unshift(str.pop())
    }
    res.push(str.join(""))
    return res.join('')
 }
 console.log(rotate("abcde",3))//op: cdeab  edcba

//========================================================//

 function rorateStr(str,k){
    str=str.split("")
    let left=0, right=str.length-1
    while(left<right){
        [str[left],str[right]]=[str[right],str[left]]
        left++
        right--
    }
    
    left=0, right=k-1
    while(left<right){
        [str[left],str[right]]=[str[right],str[left]]
        left++
        right-- 
    }

    left=k, right=str.length-1
    while(left<right){
        [str[left],str[right]]=[str[right],str[left]]
        left++
        right-- 
    }
    return str.join("")
 }
 console.log(rorateStr("abcde",3))//op: cdeab  edcba

 //====================================================//