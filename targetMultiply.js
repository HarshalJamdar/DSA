 // write a function input[1,2,3,4,5] output[120,60,40,30,24] 

function output(items) {
const finalArray = [];
 for (let i = 0; i < items.length; i++) {
    let multipliedNum = 1;
    
    items.forEach((item, indx) => {
      if (i !== indx) {
        multipliedNum = multipliedNum * item;
      }
    });
         finalArray.push(multipliedNum)
    }
  return finalArray;

}

console.log(output([1, 2, 3, 4, 5])) 