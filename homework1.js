// // TEST 1.

// function swapKeysWithValues(obj) {
//   const newObj = {};
//   for (let key in obj) {
//     if (obj[key] in newObj) {
//         if (newObj[obj[key]] instanceof Array) newObj[obj[key]].push(key)
//         else newObj[obj[key]] = [newObj[obj[key]], key]
//     } else newObj[obj[key]] = key;
//   }
//   return newObj;
// }

// console.log(swapKeysWithValues({ a: 1, b: 2, c: 2,d: 2, e: 4}));





// // TEST 2.

// const shallowCompare = (a, b) => {
//     const aArrayKeys = Object.keys(a)
//     const bArrayKeys = Object.keys(b)
//     if (bArrayKeys.length !== aArrayKeys.length) return false
//     for (const element of aArrayKeys){
//         if (a[element] === b[element]) return true
//     } return false
// }

// console.log(shallowCompare({a:1}, {a:2}));



// //WITH .every method

// const shallowCompare = (a, b) => {
//     const aArrayKeys = Object.keys(a)
//     const bArrayKeys = Object.keys(b)
//     if (bArrayKeys.length !== aArrayKeys.length) return false
//     return aArrayKeys.every(element => a[element] === b[element])
// }
// console.log(shallowCompare({a:2, b:2},{a:2,b:2}));




// // TEST 3.

// const isPalindrome = (string) => {
//     let reversedString = ""
//     for (let i = string.length - 1; i >= 0; i--) {
//         reversedString += string[i]
//     }
//     if (string === reversedString) return true 
//     else return false
// }
// console.log(isPalindrome("aaawwwaaa"));


// // TEST 4.

// function getCountOfMissingNumbers (array) { 
//     const minNumber = Math.min(...array)
//     const maxNumber = Math.max(...array)

//     const countOfNumbers = maxNumber - minNumber + 1
//     console.log(`Count of missing numbers = ${countOfNumbers - array.length}`);
// }
// getCountOfMissingNumbers([7,4,5,1])



// // TEST 5.(with .includes method)

// const findMyElement = (array, element) => {
//     if (array.includes(element)) return true 
//     else return false
// }
// console.log(findMyElement([1,2,3,4,5],3));



// // TEST 5. (without any methods)

// const findMyElement = (array, element) => {
//     for (const el of array) {
//         if (el === element) return true 
//     }
//     return false
// }
// console.log(findMyElement([1,2,3,4,5],3));