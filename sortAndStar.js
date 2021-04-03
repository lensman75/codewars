// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

function twoSort(s) {
  s.sort();
  let x = s[0].split('').join('***');
  return x;
}

// twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]);//?
// twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]);//?

// Best practise
// function twoSort(s) {
//   return s.sort()[0].split('').join('***');
// }

// twoSort = s => s.sort()[0].split('').join('***')
