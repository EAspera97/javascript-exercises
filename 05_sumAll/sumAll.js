const sumAll = function (num1, num2) {
    let sum = 0;
    let bigNum = 0;
    let smallNum = 0;
    if (typeof num1 === 'number' && typeof num2 === 'number' && Math.sign(num1) != -1 && Math.sign(num2) != -1) {
        if (num1 > num2) {
            bigNum = num1
            smallNum = num2
        } else {
            bigNum = num2
            smallNum = num1
        }
        for (let i = smallNum; i <= bigNum; i++) {
            sum += i;
        };
    } else {
        sum = 'ERROR'
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

//Solution repository
/*
const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};
*/
