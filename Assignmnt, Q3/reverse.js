const reversedNum = (num) => parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);

console.log(reversedNum(978))
console.log(reversedNum(-9744))
console.log(reversedNum(87470))
