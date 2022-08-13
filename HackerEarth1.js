function isValid(a){
    if(a.length!==9) return "invalid"
    for(let i=0;i<a.length-1;i++){
       if(/^[0-9]+$/.test[a[i]] && /^[0-9]+$/.test(a[i+1])){
          let sum = a[i]+a[i+1]
          if(!sum%2===0) return ">>invalid"
       }
        if(/^[aeiouy]$/.test(a[2])===false) return "..invalid"
       }
       return "valid"
    }
   console.log(isValid("11B242-73")) //11B242-73 //13X357-22