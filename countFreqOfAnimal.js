

function animalCount(animals){
    let Freq={}
    for(let i of animals){
        Freq[i]=(Freq[i] || 0) + 1
    }
    return Freq
}

console.log(animalCount( ["cat","dog","goat","lion","cat"] ))