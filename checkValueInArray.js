// https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript
function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    }
  }
  return false;
}

// Best practise
// const check = (a,x) => a.includes(x);

// function check(a,x){
//     return a.includes(x);
//   };
