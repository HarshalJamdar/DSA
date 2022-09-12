setImmediate(()=>{
    console.log("called setImmediate")
});

process.nextTick(()=>{
    console.log("called nexttick")
});

setTimeout(()=>{
    console.log("called setTimeout1")
},0);


setTimeout(()=>{
    console.log("called setTimeout2")
},100);

console.log("first");