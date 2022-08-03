

function checkPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) { // loop through half of the string
        if (str[i] !== str[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
console.log(checkPalindrome("malayalam"));

// //=============================================//

function checkPalindrome2(str) { 
    str = str.toString()
    let i = 0;
    let j = str.length - 1;
    while(i < j) {
        if(str[i] == str[j]) {
            i++; 
            j--;
        }
        else return false; 
    }
    return true;
}
console.log(checkPalindrome2(101));
console.log(checkPalindrome2("malayalam"))

//=============================================//

function checkPalindrome3(str) {
    const arrayValues = str.split(''); // convert string to an array
    let reverseArrayValues = arrayValues.reverse();  // reverse the array values
     reverseArrayValues = reverseArrayValues.join(''); // convert array to string
    if(str == reverseArrayValues) {
       return true
    }
    else {
        return false
    }
}

console.log(checkPalindrome3("malayalam"));
//=============================================//

function isPalin(str){
    if(str.length<=1) return true
    if(str[0]==str.slice(-1)){
        return isPalin(str.slice(1,-1))
    }else return false
}

console.log(isPalin("nayan"))
//=============================================//

function checkPalindrome4(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]; //charater matching
    });
}
console.log(checkPalindrome4("malayalam"));

// //=============================================//