// Find the least element in array.(min times occuring element)


function leastChar(str){
    let map = new Map()
  for(let i=0;i<str.length;i++){
     if(map.get(str[i])==undefined) map.set(str[i],1)
     else map.set(str[i],map.get(str[i])+1)
  }

  let least = Infinity, least_char=0
  for(let pairs of map){
     if(pairs[1]<least) {
         least=pairs[1]
         least_char=pairs[0]
     }
  }
  return [least_char,">>>",least]
}

console.log(leastChar("fdgfssgas"))