// for in loop

const myObject = {
    'js':'javaScript',
    'cpp': 'c++',
    'rb': 'ruby',
    'swift': 'swift',
}

for (const i in myObject) {
//    console.log(i,'for this key',myObject[i]);

console.log(`${i} for this value ${myObject[i]}`);
}

// for in for array

const myArray = [1,2,3,5,6]

for (const i in myArray) {
    console.log(myArray[i]);
}

// maps are not iterable 

