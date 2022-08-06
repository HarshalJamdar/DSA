

// Half or Right Triangle star pattern in JavaScript
let num = 5;
let str = '';
for(let i=1; i<=num; i++){
  for(let j=1; j<= num - i; j++){
    str += ' ';
  }
  for(let k=1; k<=i; k++){
    str += '*';
  }
  str += '\n';
}
console.log(str);
//================//
let str2 = ''
for(let i=1; i<=num; i++){
  for(let k=1; k<=i; k++){
    str2 += '*';
  }
  for(let j=1; j<= num - i; j++){
    str2 += ' ';
  }
  str2 += '\n';
}
console.log(str2);

//===================================//

let str3 = "";
for(let i = 1; i <= num; i++ ){
  for(let j = 1; j <= num; j++){
    if(i >= j ){
       str3 = str3.concat("*");
    }
  }
  str3 = str3.concat("\n")
}
console.log(str3)

//===================================//

// let str4 = "";
// for(let i = 1; i < num; i++ ){
//     for(let j = 1; j < num; j++){
//         if(i <= j ){
//             str4 = str4.concat("*");
//         }else{
//             str4 = str4.concat(" ")
//         }
//     }
//     str4 = str4.concat("\n")
// }
// console.log(str4)


