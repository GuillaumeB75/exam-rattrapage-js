const tab = [1, 2, 18, 9]

function sumAll(tab) {
let total = 0

tab.forEach((element) => total = total + element)
return total
}
console.log(sumAll(tab))