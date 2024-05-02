// const tinderUser = new Object()
const tinderUser={}

tinderUser.id = 123
tinderUser.name = "Yash"
tinderUser.PhoneNo = 7985453807
tinderUser.isLoggedin = false

// console.log(tinderUser);

const regularUser={
    email: "Yash@gmail.com",
    fullname:{
        userFullname:{
            firstName:"Yash",
            lastName:"Gupta"
        }
    }
}
// console.log(regularUser.fullname.userFullname);

// how to combine 2 objects

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = Object.assign(target,source)
const obj3 = {...obj1, ...obj2} //spread method 
// console.log(obj3);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.values(tinderUser));

// De-Structuring Object

const cource = {
    courceInstructor: "Hitesh",
    courceName: "JS",
    Student:"Yash"
}

// const {courceInstructor: instuctor} = cource
const {courceName: Name}=cource 
const {Student} = cource

console.log(cource.courceInstructor);
console.log(Name);
console.log(Student);
