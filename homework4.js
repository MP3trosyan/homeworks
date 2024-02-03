// .find
function find(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i], i, arr)) {
      return arr[i];
    }
  }
}

console.log(
  find([1, 2, 3, 4, 5, 6, 7], function (el) {
    return el > 4;
  })
);

// .filter
function filter(arr, callBack) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filter([1, 3, 55, 76, 23, 1], (el) => el > 10));

// .map
function map(arr, callBack) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callBack(arr[i], i, arr));
  }
  return newArr;
}

console.log(map([1, 3, 55, 76, 23, 1], (el) => el * 2));

// .every
function every(arr, callBack) {
  let isEvery = true;
  for (let i = 0; i < arr.length; i++) {
    if (!callBack(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

console.log(every([1, 3, 55, 76, 23, 1], (el) => el > 0));

// .some
function some(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

console.log(some([1, 3, 55, 76, 23, 1], (el) => (el = 55)));

// .findIndex
function findIndex(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex([1, 3, 55, 76, 23, 1], (el) => el === 3));

// .forEach
function forEach(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    callBack(arr[i], i, arr);
  }
}

const newArr = [];
forEach([1, 3, 55, 76, 23, 1], (el) => newArr.push(el));
console.log(newArr);
