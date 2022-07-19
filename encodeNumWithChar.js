

function generateString(number){
    let alpha='abcdefghijklmnopqrstuvwxyz'
    let result=''
    let i=0
    while(i<number){
        result+= alpha[i%26]
        i++
    }
    return result
}

function encodeNumWithChar(arr){
    for(let i=0; i<arr.length;i++){
        arr[i]=generateString(arr[i])
    }
    return arr
}
console.log(encodeNumWithChar([2,5,3]))

//OR

function encodeChar(arr){
    let maxNum=Math.max(...arr)
    let encodeArray=['']

    for(let i=1;i<=maxNum;i++){
        encodeArray.push(generateString(i))
    }
    for(let i=0;i<arr.length;i++){
        arr[i]=encodeArray[arr[i]]
    }
    return arr
}
console.log(encodeChar([2,5,3]))