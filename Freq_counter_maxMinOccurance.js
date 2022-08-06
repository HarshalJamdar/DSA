//Q1: Find is string is Anagram or not.
//check isAnagram file
//=========================================//
 

//Q2: Find the maximum occurance of a character in an array or string.
function maxOccChar(arr){
   let freq = {} , max_occ = 0 ,max_char = null
   for(let i = 0; i< arr.length; i++){
      freq[arr[i]] = ( freq[arr[i]] || 0 ) + 1

      if(max_occ < freq[arr[i]]){
         max_occ = freq[arr[i]]
         max_char = arr[i]
      }
   }
   return {"Max Occurance": max_occ,"Max Occurance Char": max_char}
}

console.log(maxOccChar([8,3,2,4,5,4,8,4]))
console.log(maxOccChar("hello world"))

//=========================================//

//Q3: Find the maximum occurance of a word in a sentence.
function maxOccWord(str){
   let arr = str.split(' ')
   let freq = {} , max_occ = 0 ,max_char = null
   for(let i = 0; i< arr.length; i++){
      freq[arr[i]] = ( freq[arr[i]] || 0 ) + 1

      if(max_occ < freq[arr[i]]){
         max_occ = freq[arr[i]]
         max_char = arr[i]
      }
   }
   return {"Max Occurance": max_occ,"Max Occurance Word": max_char}
}

console.log(maxOccWord("hello world, world is good good good"))

//=============================================================//
