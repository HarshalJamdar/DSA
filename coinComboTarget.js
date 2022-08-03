// write a code if u have 36 coins and there is a combination of 5,2 and 1 rupess coin find the min no of coins to satisfy the amount


function coinCombo(arr,k){
    let result=[]
  for(let i=arr.length-1;i>=0;i--){
    while(k>=arr[i]){
      k-=arr[i]
      result.push(arr[i])
    }
  }
  return result
}

console.log(coinCombo([1,2,5],33))