

function lengthOfLogestSubStr(str){
    let start=0, end=0, maxLen=0;
    let set = new Set();

    while(end<str.length){
        if(!set.has(str[end])){
            set.add(str[end]);
            end++;
            maxLen = Math.max(maxLen,set.size);
        }else{
            set.delete(str[start]);
            start++;
        }
    }
    return maxLen;
}

console.log(lengthOfLogestSubStr("abcabcdbb"));