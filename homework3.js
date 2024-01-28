// // 1.   Given an array. Determine whether it consists only from uniques or not.

function uniqueElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i], i + 1)) {
      return false;
    }
  }
  return true;
}
console.log(uniqueElements([1, NaN, 2, , 3, 4, 5]));

// 2.   Given an array of numbers. Find the sum of prime numbers.

function getSumOfPrimes(array) {
  let sum = 0;
  for (const element of array) {
    let counter = 0;
    for (let i = 1; i <= element; i++) {
      if (element % i === 0) {
        counter++;
      }
    }
    if (counter === 2) {
      sum += element;
    }
  }
  return sum;
}
console.log(getSumOfPrimes([3, 4, 5]));

// 3.   Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function getLargestProduct(array) {
  let product;
  let result = 1;
  for (let i = 0, j = array.length - 1; i < j; i++) {
    for (j; j > i; j--) {
      product = array[i] * array[j];
      if (result <= product) {
        result = product;
      }
      if (array[i] <= array[j]) {
        break;
      }
    }
  }
  return result;
}
console.log(getLargestProduct([2, 100, 5, 7, 20, 3, 10]));


// 4.   Given a sorted array and an element from that array. Find the index of that element using binary search. (You should research binary
// search)

function binarySearch(array, item, start = 0, end = array.length - 1) {
  let mid;

  while (start <= end) {
    mid = Math.round((end - start) / 2 + start);

    if (array[mid] === item) {
      return mid;
    } else if (array[mid] > item) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));


// With recursive function
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function recursiveBinarySearch(array, item, start = 0, end = array.length) {
    let middle = Math.floor( (start + end) / 2)
    if (item === array[middle]) {
        return middle
    } else if (item < array[middle]) {
        return recursiveBinarySearch(array, item, 0, middle - 1)
    } else return recursiveBinarySearch(array, item, middle + 1, end)
}
console.log(recursiveBinarySearch(array, 7, 0, array.length));
