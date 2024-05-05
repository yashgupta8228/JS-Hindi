// reduce 

// for each, map, filter , reduce these all are call back method but "for each" does not return the value and all the other return the value  

/*
const myArr = [1,2,3]

 const Total = myArr.reduce((acc,currval) => acc+currval ,3)
  console.log(Total);
  */

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let cartTotal = shoppingCart.filter((i)=> i.price<5999).reduce((acc,currval)=> acc + currval.price, 0)
console.log(cartTotal);