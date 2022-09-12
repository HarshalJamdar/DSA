//Check whether a given string is an interleaving of two other given strings
//Given three strings S1, S2 and S3. Write a program that checks whether S3 is an interleaving of S1 and S2. 
// S3 is said to be an interleaving of S1 and S2 if it contains all characters of S1 and S2 and order of all characters in individual strings is preserved.
// Input:AB,CD,ACBD


function interleaved(s1,s2,s3){
    let i=0,j=0,k=0
    for(i;i<s3.length;i++){
        if(s3[i]==s1[j]) j++
        else if(s3[i]==s2[k]) k++
        else return "No"
    }
    return "Yes"
}

console.log(interleaved("AB","CD","ACBD"))
console.log(interleaved("aabcc","dbbca","aadbbcbcac"))




