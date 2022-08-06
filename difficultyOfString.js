   function findDifficulty(S){
    let arrS = S.split(" ")
    let diffi = 0
    let easy = 0
    for(i in arrS){
       let word = arrS[i].split('')
       let vowel = 0
       let cons = 0
       for(j in word){
       if(/^[aeiou]$/.test(word[j])== true) vowel += 1
       else cons += 1 
    }
    if(cons>vowel) diffi +=1
    else easy +=1
    }
     return  5*diffi + 3*easy
   }
   console.log(findDifficulty("Difficulty of sentence"))