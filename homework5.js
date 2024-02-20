// TASK 1. Given a number. Write a recursive function that reverse the number. Return the new number.

function recReversedNumber(num, index = String(num).length - 1) {
  const stringNum = String(num);
  if (index === 0) {
    return stringNum[0];
  }
  return stringNum[index] + recReversedNumber(num, index - 1);
}
console.log(recReversedNumber(345));

// TASK 2. Given a number and an array. Find the second occurrence of the number in the array.
// Consider that the occurrence of each element in the array is at least two.

function recFindOccurrences(num, arr, i = 0, counter = 0) {
  if (i === arr.length) {
    return 0;
  } else if (arr[i] === num) {
    counter += 1;
    if (counter === 2) {
      return i;
    }
  }
  return recFindOccurrences(num, arr, i + 1, counter);
}
console.log(recFindOccurrences(3, [1, 2, 1, 3, 4, 3, 6, 7, 8, 3, 1, 2]));

// TASK 3. Given a substring and a string. Find how many times the substring occurred in the string.
// (For getting substring of the string use str.substring(startIndex, endIndex),
// str.substr(startIndex, length) )

function recSubstringCounter(substring, str, i = 0, counter = 0) {
  if (i > str.length - substring.length) {
    return counter;
  }
  if (str.substring(i, substring.length + i) === substring) {
    counter += 1;
    if (++i > str.length - substring.length) {
      return counter;
    }
  }
  return recSubstringCounter(substring, str, i + 1, counter);
}

console.log(recSubstringCounter("asd", "Hi asd how are you"));

// TASK 4. Given a string, compute recursively (no loops) a new string where all appearances of "pi"
// have been replaced by "3.14"

function getChangedPi(str) {
  let newStr = "";
  function recReplacePi(str, i = 0) {
    const lowerCase = str.toLowerCase()
    if (i >= str.length) {
      return ""
    }
    if (lowerCase.substring(i, i + 2) === "pi") {
      newStr += "3.14";
      i += 2;
    } else {
      newStr += str[i];
      i += 1;
    }
    return recReplacePi(str, i);
  }
  recReplacePi(str);
  return newStr;
}
console.log(getChangedPi("Hi how pi arePi"));


// TASK 5. Given an array of nested arrays. Write a recursive function that flattens it.
// (Hint create function that concats arrays).

function getFlattenedArr(arr1, flattenedArr = []) {
  function recConcatArr(arr, i = 0) {
    if (i === arr.length && !Array.isArray(arr[i])) {
      return i;
    }
    if (Array.isArray(arr[i])) {
      recConcatArr(arr[i]);
    } else {
      flattenedArr.push(arr[i]);
      return recConcatArr(arr, i + 1);
    }
  }
  recConcatArr(arr1);
  return flattenedArr;
}
console.log(getFlattenedArr([1, 2, 3, [4, 5, [6, [1, 2, 3, [2, 3, 4]], 7]]]));

// TASK 6. Given a number. Write a function that calculates its sum of the digits and if that sum has
// more than 1 digit find the sum of digits of that number. Repeat that process if needed
// and return the result.

function getSumOfDigits(num) {
  let sum = 0;
  function recSumOfDigits(num, i = 0) {
    const strDigits = String(num);
    if (i === strDigits.length) {
      if (String(sum).length >= 2) {
        return getSumOfDigits(sum, 0);
      } else {
        return sum;
      }
    } else {
      sum += Number(strDigits[i]);
      return recSumOfDigits(num, i + 1);
    }
  }
  return recSumOfDigits(num);
}
console.log(getSumOfDigits(901));