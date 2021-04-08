// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let x = args[0];
    for (let i = 1; i < args.length; i++) {
      if (args[i] < x) {
        x = args[i];
      }
    }
    return x;
  }
}

// Best practice
// class SmallestIntegerFinder{
//     findSmallestInt(args) {
//         return Math.min(...args)
//     }
// }
