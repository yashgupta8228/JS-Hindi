// promise is a await task and promise is a call back function 

// how to wtite promise (1)

const promiseOne  = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async Task 1')
        resolve()
    },1000)
})

promiseOne.then(()=>{
    console.log('Task1 completed')
})

// how to write promise(2)


new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async 2')
        resolve()
    },1000)
    
}).then(()=>{
    console.log('Task 2 completed');
})

// promise (3) how to fetch return the object from resolve


const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Getting Data')
        resolve({userName : 'Yash', eMail: 'yashgupta8228@gmail.com'})
    },1000)
}).then((user)=>{
    console.log('task Done')
    console.log(user)
})

// promise (4) how to fetch the value from inside resolve 


const promiseFour = new Promise((resolve,reject)=>{
    let error = true
    setTimeout(()=>{
        if(!error){
            console.log('check Promise 4')
            resolve({userName: 'Yash', eMail: 'YAshgupta8228@gmail.com'})
        }else{
            reject('Something Went So Wrong ')
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user)
    return user.userName
})
.then((myName)=>{
    console.log(myName);
})
.catch((wrongData)=>{
    console.log(wrongData);
})
.finally(()=>{
    console.log('All TAsk done')
})

// async and await usecase

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// how to fetch data from API using async and await

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()


// fetch data from API using then and catch and finally

fetch('https://api.github.com/users/hiteshchoudhary').
then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log('Fetch done'))


