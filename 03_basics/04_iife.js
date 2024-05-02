// Immediately Invoked function expression (IIFE)


(function chai(){
    // named IIfe
    console.log(`DB CONNECTED`);
})();

// if we have to create two IIFE then we have to end the function with a semicolon ;

// Arrow function to invoke immediately 

((username)=>{
    // Unnamed IIFE
    console.log(`DB CONNECTED , ${username}`);
})("Yash");