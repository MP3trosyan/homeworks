// String.prototype.concat()
function concat(str1,str2) {
    return str1 + str2
}
console.log(concat("Hello ", "World"));

//String.prototype.endsWith()
function endsWith(str, chars) {
    for (let i = str.length - 1; i >= str.length - chars.length; i--) {
      let includes = false;
      for (let j = chars.length - 1; j >= 0; j--) {
        if (str[i] === chars[j]) {
          includes = true;
          break;
        }
      }
      if (!includes) return false;
    }
    return true;
  }
  console.log(endsWith("Barev", ""));

  //String.prototype.lastIndexOf()
  function indexOf (str, subStr, pos = 0) {
    for (let i = pos; i < str.length; i++) {
        let includes = true
        for (let j = 0; j < subStr.length; j++) {
            if (str[ i + j ] !== subStr[j]) {
                includes = false
                break; 
            }
        }
        if (includes) return i
    } return "no word"
}

console.log(indexOf("Barev","ev"));


//String.prototype.repeat()
function repeat(str, count) {
  let i = 1
  let repeatedString = ""
  if (count < 0) {
      return "The argument must be a positive number!"
  }
  while(i <= count) {
      repeatedString+=str
      i++
  }
  return repeatedString
}
console.log(repeat("aw",3));

//String.prototype.replace()
function replace(str, search, replaceValue) {
  let helper = "";
  let isReplaced = false;

  for (let i = 0; i < str.length; i++) {
    let hasChanged = true;
    for (let j = 0; j < search.length; j++) {
      if (str[i + j] !== search[j] || isReplaced) {
        hasChanged = false;
        break;
      }
    }

    if (hasChanged) {
      helper += replaceValue;
      i += search.length - 1;
      isReplaced = true;
    } else {
      helper += str[i];
    }
  }

  return helper;
}
console.log(replace("ABCEFEF", "EF", "**"));


//String.prototype.slice()
function slice(str, fromIndex = 0, toIndex = str.length) {
  let result = "";

  if (toIndex > str.length) {
    toIndex = str.length
  }
  if (fromIndex < 0) {
      fromIndex = fromIndex + str.length
  } 
  if (fromIndex < -str.length) {
      fromIndex = 0
  }
  if (fromIndex >= str.length) {
      return ""
  }
  if (toIndex < 0) {
      toIndex = toIndex + str.length
  }
  if (toIndex < -str.length) {
      toIndex = 0
  } 
  if (toIndex < fromIndex) {
      return ""
  }
  for (let i = fromIndex; i < toIndex; i++) {
      result+=str[i]
  }
  return result
}
console.log(slice("ABCDEFG", 1, -4));



//String.prototype.split()
function split(str, separator, limit = str.length - 1) {
  let splString = "";
  const splArray = [];

  for (let i = 0; i < str.length; i++) {
    if(splArray.length >= limit && limit >= 0) {
        return splArray
    }
    if (separator === "") {
      splArray.push(str[i]);
    } else if (str[i] !== separator) {
      splString += str[i];
    } else {
      splArray.push(splString);
      splString = "";
    }
  }
  splArray.push(splString)

  return splArray;
}
console.log(split("AB, CD, EF", ",",));


//String.prototype.startsWith()
function startsWith(str, chars) {
  for (let i = 0; i < chars.length; i++) {
    let includes = false;
    for (let j = 0; j < chars.length; j++) {
      if (str[i] === chars[j]) {
        includes = true;
        break; 
      }
    }
    if (!includes) return false;
  }
  return true;
}
console.log(startsWith("Barev", "Bar"));


//String.prototype.substring()
function substring(str, indexStart = 0, indexEnd = str.length) {
  let result = "";
  if (indexEnd > str.length) {
    indexEnd = str.length
  }
  
  if (indexStart < 0) {
    for (let i = 0; i < indexEnd; i++) {
      result += str[i];
    }
  } else if (indexEnd < 0) {
    for (let i = 0; i < indexStart; i++) {
      result += str[i];
    }
  } else if(indexStart <= indexEnd) {
    for (let i = indexStart; i < indexEnd; i++) {
      result += str[i];
    }
  } else if (indexStart > indexEnd) {
    for (let i = indexEnd; i < indexStart; i++) {
      result += str[i];
    }
  }
  return result;
}
console.log(substring("ABCDEFG", -1,8,));
