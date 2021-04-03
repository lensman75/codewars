// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

function removeExclamationMarks(s) {
  let arr = s.split('');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '!') {
      continue;
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr.join('');
}

// removeExclamationMarks('ello world!'); //?

// Best practise
// function removeExclamationMarks(s) {
//   return s.replace(/!/gi, '');
// }
