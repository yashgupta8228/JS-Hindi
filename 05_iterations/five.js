//  for each loop is used using function 
 
 const coding = ['js', 'ruby', 'swift', 'py', 'cpp']


//  coding.forEach(function(item) {
//     console.log(item);
//  })

 coding.forEach((item)=>{
    // console.log(item);
    // items = i 
 })

 coding.forEach((item, index, arr)=>{
    // console.log(item, index, arr);
 })

// for each loop for [{}, {},{}] array of objects 

 const myCoding = [
    {
        languageName : 'javascript',
        languagesign : 'js'
    },
    {
        languageName : 'java',
        languagesign : 'java'
    },
    {
        languageName : 'python',
        languagesign : 'py'
    }
 ]

 myCoding.forEach( (items, values, obj)=>{
    console.log(items.languageName);
    console.log(items);
    console.log(items.languagesign);
 })

