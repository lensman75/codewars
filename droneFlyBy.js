// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

function flyBy(lamps, drone) {
  let ans = [];
  if (drone.length > lamps.length) {
    for (let i = 0; i < lamps.length; i++) {
      ans.push('o');
    }
  } else {
    for (let i = 0; i < drone.length; i++) {
      ans.push('o');
    }
    let x = lamps.length - drone.length; //?
    for (let i = 0; i < x; i++) {
      ans.push('x');
    }
  }
  return ans.join('');
}
