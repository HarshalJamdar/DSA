var isValid = function(str) {
    let stack=[]
    for(let i=0;i<str.length;i++){ 
    if(str[i]==='(' || str[i]==='[' || str[i]==='{' ) stack.push(str[i]) 
    if(str[i]==='}'){
        if(stack[stack.length-1]==='{') stack.pop();
        else return false;
    }
     if(str[i]===']'){
        if(stack[stack.length-1]==='[') stack.pop();
        else return false;
    } 
    if(str[i]===')'){
        if(stack[stack.length-1]==='(') stack.pop();
        else return false;
    }       
 }
    return stack.length===0?true:false
}
console.log(isValid("(){}[]"))
console.log(isValid("({{}})"))

//=====================================//

var isValid2 = function(s) {
  const stack = []
  
  const pairs = {
     '}': '{',
     ')': '(',
     ']': '[' 
  }
  
  for (let item of s) {
     if ((item === "{") || (item ==="(") || (item ==="[")) {
          stack.push(item)
      } else if (stack[stack.length-1]===pairs[item]) {
              stack.pop()
          } else {
              return false
          }
  }
  
 return !stack.length
};

console.log(isValid2("(){}[]"))
console.log(isValid2("({{}})"))