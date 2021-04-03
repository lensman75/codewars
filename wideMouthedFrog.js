//https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/train/javascript
function mouthSize(animal) {
  // code here
  animal = animal.toLowerCase();
  switch (animal) {
    case 'alligator':
      return 'small';
    default:
      return 'wide';
  }
}

// Best practice
// function mouthSize(animal) {
//   return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
// }
