 const userEmail = "Yash.ai"

 if(userEmail){
    console.log("true");
 }else {
    console.log("False");
 }

//  falsy value

// false, 0, -0, BigInt 0n, "", null, undefined,Nan

const empObj = {}
if(Object.keys(empObj).length == 0){
   console.log("obj is Empty");
}

// Nullish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ??20 //10 ans

console.log(val1);

// terniary Operator 

// condition ? true : false

const corcePrise = 100
corcePrise >= 80 ? console.log("Greater than 80 ") : console.log("smaller than 80")


