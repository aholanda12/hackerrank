function fillArray(value, len) {
  // The given string needs to be repeated infinitely/however many times needed
  // The string then needs to be cut down to the length given
  // From that new string, we need to count the number of A's and return that amount
  var arr = [];
  var output = 0;
  for (let i = 0; i < len; i++) {
    arr.push(value);
  }
  var newString = arr.join('');
  var sliceString = newString.slice(0, len)
  for (let z = 0; z < sliceString.length; z++) {
    if (sliceString[z] === 'a') {
      output++
    }
  }
  return output;
}

console.log(fillArray());

function countFrom(string,end){
  let total = 0
  for(let i =0; i < end; i++){
      if(string[i]==="a") total ++
  }
  return total
}

// Complete the repeatedString function below.
function repeatedString(string, n) {
  const numberOfAsInString = countFrom(string,string.length)
  const remainder = n % string.length
  const timesStringIsRepeated = Math.floor(n/string.length) 
  const numberOfAsInStringRemainder = countFrom(string,remainder)
  return numberOfAsInString * timesStringIsRepeated + numberOfAsInStringRemainder;
}