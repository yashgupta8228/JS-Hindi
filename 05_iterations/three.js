// Array Specific loop 
// Higher order loop 

// for of loop :-
// console.log("Ex 1");


const myArray = [2, 2, 3, 4, 5]

for (const i of myArray) {
    // console.log(i);
}


// one more example 

const myGF = "Hello World"

for (const gf of myGF) {
    // console.log(gf);
    
}

// Maps

const map =new Map()
map.set('IN','India')
map.set('US','America')
map.set('UAE','Dubai')

console.log(map);

for (const [i, j] of map) {
    console.log( j);
}

