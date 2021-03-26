const isEven = (number) => {
  if (number % 2 === 0 && number % 40 !== 0) {
    return true
  } else if (number % 100 === 0) {
    return true
  } else {
    return false
  }
}

console.log(isEven(20)) 
console.log(isEven(35)) 
