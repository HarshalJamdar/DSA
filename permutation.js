

function permutation(str){
    let array = str.split("");
    let result = [];

    function dfs(newstr,slate){
        if(newstr.length===0 && slate.length===str.length){
            result.push(slate.join(""));
            return;
        }

        for(let i=0; i<newstr.length;i++){
            slate.push(newstr[i]);
            newstr.splice(i,1);
            dfs(newstr,slate);
            newstr.splice(i,0,slate.pop());
        }
    }

    dfs(array,[]);
    return result;
}

console.log(permutation("army"))