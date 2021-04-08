// https://www.codewars.com/kata/57096af70dad013aa200007b/train/javascript
// function check(a1, a2, logop) {
//   switch (logop) {
//     case 'OR':
//       if (
//         (a1 == true && a2 == true) ||
//         (a1 == false && a2 == true) ||
//         (a1 == true && a2 == false)
//       ) {
//         return true;
//       } else {
//         return false;
//       }
//     case 'XOR':
//       if ((a1 == false && a2 == false) || (a1 == true && a2 == true)) {
//         return false;
//       } else {
//         return true;
//       }
//     case 'AND':
//       if (a1 == true && a2 == true) {
//         return true;
//       } else return false;
//   }
// }

function logicalCalc(array, op) {
  if (array.length ==1) {
    return array[0];
  }
  let x = array[0];
  let y = array[1];
  for (let i = 3; i < array.length; i++){
    
  }
}

logicalCalc([false], 'AND');
logicalCalc([false], 'OR');
logicalCalc([false], 'XOR');
logicalCalc([true], 'AND');
logicalCalc([true], 'OR');
logicalCalc([true], 'XOR');
