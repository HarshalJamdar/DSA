//ANAGRAM : All the characters of string "abcd" is present in "dacb" and in same frequencies. Hence both are anagram of each other.

//Check whether two given strings X and Y of sizes N and M respectively are anagram of each other or not.


//case 1:
function isAnagrm(A,B){
let a = A.trim().split("").sort().join('')
let b = B.trim().split("").sort().join('')
if(a === b) return true
else false
}
console.log(isAnagram("naman","manan"))
//=============================================//

//case 2 :
function isAnagram(str1,str2){
  if(str1.length!==str2.length){ //checking length, it should be same.
    return false ;
  }

  let counter = {}
  for(let letter of str1){ // mapping the letters
    counter[letter] = (counter[letter] || 0) + 1; //first time letter will come,it will be undefined thats why taken it 0, and then adding 1(we cant add 1 to undefined) i.e. if already present add 1 or first time coming take 0 then add 1.
  }
  
  for(let items of str2){
    if(!counter[items]) return false //checking item in str2 is present in counter, if not return false.
    counter[items] -= 1 //if present we are removing it from counter, i.e. if it is anagram counter will be empty then.
  }
  return true
}
console.log(isAnagram("listen","islent"))

//=============================================//

//case 3 :
// Print Anagrams Together:-
const words = ["dell", "ledl", "abc", "cba", 'boo'];
function getGroupedAnagrams(words) {
  const anagrams = {}; // {abc:[abc,cba], dell:[dell, ledl]}
  words.forEach((word) => {
    const sortedWord = word.split('').sort().join('');
    if (anagrams[sortedWord]) {
      return anagrams[sortedWord].push(word);
    }
    anagrams[sortedWord] = [word];
  });
  return anagrams;
}
const groupedAnagrams = getGroupedAnagrams(words); //console.log(groupedAnagrams)
for (const sortedWord in groupedAnagrams) {
  console.log(groupedAnagrams[sortedWord].toString());
}