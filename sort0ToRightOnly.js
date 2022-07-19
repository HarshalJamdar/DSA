function sort01(arr){
    let left=0
    let right = arr.length-1
    while(left<right){
        console.log("gh",left,right)
        while(arr[left]==0 && left<right){
            left++
        }
        while(arr[right]==1 && left<right){
            right--
        }
        //console.log(left,right)
        if(left<right){
           
            [arr[left],arr[right]]=[arr[right],arr[left]]
            //console.log(arr[left],arr[right])
        }
    }
    return arr
}

console.log(sort01([1,0,1,1,1,0,0,0]))

//                l             r
// l=0    r=7    [1,0,1,1,1,0,0,0]
//w(0<7){
//     w(1==0 , 0<7) 0++  fail
//     w(0==1 , 0<7) 7--  fail
//     if(0<7) [1,0] = [0,1] == [0,0,1,1,1,0,0,1]

//                l             r
// l=0    r=7    [0,0,1,1,1,0,0,1]
//w(0<7){
//     w(0==0 , 0<7) 0++  pass  l=1
//     w(1==1 , 0<7) 7--  pass  r=6
//     if(1<6) [0,0] = [0,0] == [0,0,1,1,1,0,0,1]
// }

//                  l          r
// l=1    r=6    [0,0,1,1,1,0,0,1]
//w(1<6){
//     w(0==0 , 1<6) 1++  pass  l=2
//     w(0==1 , 1<6) 6--  fail  r=6
//     if(2<6) [1,0] = [0,1] == [0,0,0,1,1,0,1,1]
// }

//                    l       r
// l=2    r=6    [0,0,0,1,1,0,1,1]
//w(2<6){
//     w(0==0 , 2<6) 2++  pass  l=3
//     w(1==1 , 2<6) 6--  pass  r=5
//     if(3<5) [1,0] = [0,1] == [0,0,0,0,1,1,1,1]
// }

//                      l   r
// l=3    r=5    [0,0,0,0,1,1,1,1]
//w(3<5){
//     w(0==0 , 3<5) 3++  pass  l=4
//     w(1==1 , 3<5) 5--  pass  r=4
//     if(4<4) fail
// } r [0,0,0,0,1,1,1,1]



//sort an Array so that all zero moved to words right [3,2,0,4, 0,5,6,0]

function sort0ToRight(arr){
    let left=0
    let right=arr.length-1
  while(left<right){
    if(arr[left]==0 && arr[right]!=0){
        [arr[left],arr[right]]=[arr[right],arr[left]]
    }else if(arr[left]!=0 && arr[right]!=0){
        left++
    }else if(arr[left]==0 && arr[right]==0){
        right--
    }else{
        left++
        right--
    }
  }
  return arr
}
console.log(sort0ToRight([0,2,3,0,0,1,2,3,0,2,0,2,3,0]))