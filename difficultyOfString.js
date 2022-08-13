   // function findDifficulty(S){
   //  let arrS = S.split(" ")
   //  let diffi = 0
   //  let easy = 0
   //  for(i in arrS){
   //     let word = arrS[i].split('')
   //     let vowel = 0
   //     let cons = 0
   //     for(j in word){
   //     if(/^[aeiou]$/.test(word[j])== true) vowel += 1
   //     else cons += 1 
   //  }
   //  if(cons>vowel) diffi +=1
   //  else easy +=1
   //  }
   //   return  5*diffi + 3*easy
   // }
   // console.log(findDifficulty("Difficulty of sentence"))



   function isValid(a){
      for(let i=0;i<a.length-1;i++){
         if(/^[0-9]+$/.test[a[i]] && /^[0-9]+$/.test(a[i+1])){
            let sum = a[i]+a[i+1]
            if(!sum%2===0) return "invalid"
         }else if(/^[aeiou]$/.test(a[3])===false) return "invalid"
      }
      return "valid"
   }
   console.log(isValid("22u531-35"))