

function sameSetCheck(str){
    if(str.length%2 !==0) return "No"
    let map={}
    for(let i=0;i<str.length;i++){
        if(i<str.length/2) map[str[i]]=map[str[i]]+1 || 1
        else{ 
           if(map[str[i]]) map[str[i]]--
           else return "No"
        }
    }
    return "Yes"
}
console.log(sameSetCheck("absbas"))