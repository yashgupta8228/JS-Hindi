// map 
const myNum = [1,2,3,4,5,6,7,8,9,10]

// const allNum =myNum.map((i)=> i +10)
// console.log(allNum);

// chaining 

const chaining = myNum.map((cartTotal)=> cartTotal * 10).map((cartTotal) => cartTotal + 10).filter((cartTotal) => cartTotal>=50)

console.log(chaining);

