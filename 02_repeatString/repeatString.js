const repeatString = function (string, num) {
    let newString = '';
    if (num < 0) {
        newString = 'ERROR'
    } else {
        for (i = 0; i < num; i++) {
            newString += string
        }
    }
    return newString;
}

// Do not edit below this line
module.exports = repeatString;

// Proposed solution
/*
const repeatString = function(word, times) {
  if (times < 0) return 'ERROR';
  let string = '';
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};

module.exports = repeatString;
*/