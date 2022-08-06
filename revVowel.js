function revVowels(s){
    s=s.split("")
    let vowel={"a":1,"e":1,"i":1,"o":1,"u":1}
    let arr=[]
    for(let i=0;i<s.length;i++){
        if(vowel[s[i]]) arr.push(i)
    }
    //console.log(arr)
    let left=0, right=arr.length-1
    while(left<right){
        [s[arr[left]],s[arr[right]]]=[s[arr[right]],s[arr[left]]]
        left++
        right--
    }
    return s.join("")
}
console.log(revVowels("hello")) //holle