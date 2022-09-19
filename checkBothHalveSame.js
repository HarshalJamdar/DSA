//Both halves have same character with same frequency then they are balance.

function sameSetCheck(str){
    if(str.length%2 !==0) return "No" //odd length str
    let map={}
    for(let i=0;i<str.length;i++){
        if(i<str.length/2) 
             map[str[i]] = (map[str[i]] || 0) + 1;   
        else{ 
           if(map[str[i]]) map[str[i]]--
           else return "No"
        }
    }
    //console.log(map)
    return "Yes"
}
console.log(sameSetCheck("absqqbas"))
console.log(sameSetCheck("absqsqbasl"))
