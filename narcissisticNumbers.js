// https://www.codewars.com/kata/56b22765e1007b79f2000079/train/javascript

function isNarcissistic(n) {
  let x = (n + '').length;
  let res = 0;
  let y = (n + '').split('').map((n) => {
    return (res = +Math.pow(n, x));
  }); //?
  for (let i = 0; i < y.length - 1; i++) {
    res += y[i];
  }
  return res == n;
}
