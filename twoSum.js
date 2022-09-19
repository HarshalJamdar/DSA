



function twoSum(nums,target){
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        let num1 = nums[i];
        let num2 = target - num1;
        if(map.has(num2)) return [map.get(num2),i]
        map.set(num1,i);
    }
}

console.log(twoSum([2,11,15,8,7,9],9)); //==> [0,4] as 2+7=9