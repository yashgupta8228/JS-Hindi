const marvelHeroes = ["thor", "IronMan", "Hulk"]

const dcHeores = ["Batman", "Superman", "Flash"]

// In this 2 arrays got mergered but as a subArray
// marvelHeroes.push(dcHeores)

console.log(marvelHeroes);

// show to merge without creating a sub Array inside Array 

// const AllHeroes = marvelHeroes.concat(dcHeores)

// console.log(AllHeroes);

// Other way to do this ny using spread operator 

const All_newHeroes = [...marvelHeroes, ...dcHeores]

console.log(All_newHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6, [8, 9, 10]]]
const RealArray = anotherArray.flat(Infinity)
console.log(RealArray);

console.log(Array.isArray("Yash"))
console.log(Array.from("Yash"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3));