


function maxWord(sen){
    let max=0
    for(let currSen of sen ){
        let currWordCount=currSen.split(" ").length 
        //console.log(currWordCount)
        if(currWordCount>max) max = currWordCount
    }
    return max
}
console.log(maxWord(["please wait","continue to fight","continue to win always"])) //4 as "continue to win always" contain 4 words wich is max in this array.