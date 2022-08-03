

function animalCount(animals){
    let animalFreq={}
    for(let animal of animals){
        if(animalFreq[animal]) animalFreq[animal] += 1
        else animalFreq[animal]=1
    }
    return animalFreq
}

console.log(animalCount( ["cat","dog","goat","lion","cat"] ))