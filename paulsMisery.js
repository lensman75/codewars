// https://www.codewars.com/kata/57ee31c5e77282c24d000024/train/javascript

function paul(x) {
  console.log(x);
  let res = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] == 'kata') {
      res += 5;
    }
    if (x[i] == 'Petes kata') {
      res += 10;
    }
    if (x[i] == 'eating') {
      res += 1;
    } else {
      continue;
    }
  }
  if (res < 40) {
    return 'Super happy!';
  }
  if (res < 70 && res >= 40) {
    return 'Happy!';
  }
  if (res < 100 && res >= 70) {
    return 'Sad!';
  } else {
    return 'Miserable!';
  }
}
