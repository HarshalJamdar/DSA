//Q 1 : Reverse each word in string in given manner.

//  "they are playing game"= "yeht era gniyalp emag"

// function reverse(word){
//     let a=word.length, left=0,right=a-1;
//     while(left<right){
//         [word[left],word[right]]=[word[right],word[left]]
//         left++
//         right--
//     }
//     return word
// }

function reverse(str){
    if(str.length==0) return ''
    return reverse(str.slice(1))+str[0]
}

function revSenWord(str){
    let words=str.split(" ")
    for(let i=0;i<words.length;i++){
        words[i]=reverse(words[i])
    }
    return words.join(' ')
}

console.log(revSenWord("they are playing game")) //yeht era gniyalp emag