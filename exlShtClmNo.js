// var
// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 



titleToNumber = function(columnTitle) {
    let res = 0
    for(let c of columnTitle){
        //console.log(res*26,">>",c.charCodeAt(0)- 65 + 1)
        res = res*26 + c.charCodeAt(0) - 65 + 1
    }
    return res
};

console.log(titleToNumber("AA"))