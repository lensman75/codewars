// https://www.codewars.com/kata/57096af70dad013aa200007b/train/javascript
function logicalCalc(array, op) {
  if (op === 'XOR' && array.length == 1) {
    return array[0];
  }
  if (op === 'AND') {
    let res = array.reduce(function (one, two) {
      return one && two;
    }, array[0]);
    return res;
  }
  if (op === 'OR') {
    let res = array.reduce(function (one, two) {
      return one || two;
    }, array[0]);
    return res;
  }
  if (op === 'XOR') {
    let res = array.reduce(function (one, two) {
      return one ^ two;
    }, array[0]);
    if (res == 1) {
      return false;
    } else {
      return true;
    }
  }
}

logicalCalc([true, true, true, false], 'AND'); // false
logicalCalc([true, true, true, false], 'XOR'); // true
logicalCalc([true, true, true, false], 'XOR'); // true
logicalCalc([true, true, true, false], 'XOR'); // true
logicalCalc([true, true, false, false], 'AND'); // false
logicalCalc([true, true, false, false], 'OR'); // true
logicalCalc([true, true, true, false], 'OR'); // true
logicalCalc([true, true, false, false], 'XOR'); // false
logicalCalc([true, false, false, false], 'AND'); // false
logicalCalc([true, false, false, false], 'OR'); // true
logicalCalc([true, false, false, false], 'XOR'); // true
logicalCalc([true, true], 'AND'); //?
logicalCalc([true, true], 'OR'); //?
logicalCalc([true, true], 'XOR'); //?
logicalCalc([false, false], 'AND'); //?
logicalCalc([false, false], 'OR'); //?
logicalCalc([false, false], 'XOR'); //?
logicalCalc([false], 'AND'); //?
logicalCalc([false], 'OR'); //?
logicalCalc([false], 'XOR'); //?
logicalCalc([true], 'AND'); //?
logicalCalc([true], 'OR'); //?
logicalCalc([true], 'XOR'); //?
