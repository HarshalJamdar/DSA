



function calculateTotalSum(banks){
    let totalAmount=0
    for(balance of banks){
        totalAmount +=balance
    }
    return totalAmount
}

function calculateRichestPerson(accounts){
    let maxAmount = -Infinity
    for(let customer of accounts){
        maxAmount=Math.max(calculateTotalSum(customer),maxAmount)
    }
    return maxAmount
}

console.log(calculateRichestPerson([[1,2,3],[3,2,1]]))
console.log(calculateRichestPerson([[2,8,7],[7,1,3]],[1,9,5]))

//============================================================================//

function maxWealth(accounts){
    let max=0
    for(let customer of accounts){
        let customerTotal=0
        for(let money of customer){
            customerTotal += money
        }
        max=Math.max(max,customerTotal)
    }
    return max
}

console.log(maxWealth([[2,8,7],[7,1,3],[1,9,5]]))