

// //callback
function add(num,callback){
    callback( null,num+10 )
}

add(20,(err,result)=>console.log("here",err,result))

// //===========================================================//

// // promise
function add1(num){
    return new Promise((resolve,reject)=>{
        if(num) resolve(num+10)
        else reject("reject")
    })
    
}

add1().then(res=>console.log("Result is :", res)).catch(err=>console.log("Rejected",err))

// //=============================================================//

// //async-await
async function f(){
  let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Succesful"),1000)
  });

  let result = await promise;
  console.log(result);
}
f();

//================================================================//

// function f1(num){
//   return new Promise((resolve,reject)=>{
//     setTimeout((num)=>resolve(num),1000)
//   });
// }

// f1(4).then(res=>console.log("Result is :", res)).catch(err=>console.log("Rejected",err))