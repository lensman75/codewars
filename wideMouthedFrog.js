//https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/train/javascript
function mouthSize(animal) {
  animal = animal.toLowerCase();
  switch (animal) {
    case 'alligator':
      return 'small';
    default:
      return 'wide';
  }
}
