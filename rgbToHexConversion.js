// https://www.codewars.com/kata/513e08acc600c94f01000001/javascript

let decToHex = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15:'F' };

function checkLength(str){
    if (str.length === 1){
        return '0'+str;
    }
    return str;
}

function firstValue(x){
    let temp = Math.floor(x/16);
    if(temp >= 0 && temp <= 9){
        return temp+''
    } else return decToHex[temp];
}

function secondValue(x){
    let temp = ((x/16) - Math.floor(x/16))*16; //?
    if(temp >= 0 && temp <= 9){
        return temp+''
    } else return decToHex[temp];
}

console.log(firstValue(115));
console.log(secondValue(115))

function rgb(r, g, b) {
  let ans = '';
  let conv_r = '';
  let conv_g = '';
  let conv_b = '';

  if (r >= 255) {
    conv_r += 'FF';
  }
  if (g >= 255) {
    conv_g += 'FF';
  }
  if (b >= 255) {
    conv_b += 'FF';
  }

  if (r <= 0) {
    conv_r += '00';
  }
  if (g <= 0) {
    conv_g += '00';
  }
  if (b <= 0) {
    conv_b += '00';
  }

  if(r > 0 && r < 255){
    conv_r = firstValue(r) + secondValue(r); //?
  }
  if(g > 0 && g < 255){
    conv_g = firstValue(g) + secondValue(g);
  }
  if(b > 0 && b < 255){
    conv_b = firstValue(b) + secondValue(b);
  }



  ans = ans + checkLength(conv_r) + checkLength(conv_g) + checkLength(conv_b);
  return ans;
}

rgb(1, 2, 3) //?

console.log(rgb(115,244,90));
let abc = 220
console.log(abc.toString(16).toUpperCase())

// Best practise
// function rgb(r, g, b){
//     function toHex(a) { 
//       if (a <= 0) return '00';
//       else if (a >= 255) return 'FF';
//       else return a.toString(16).toUpperCase();
//     }
//     return toHex(r) + toHex(g) + toHex(b);
//   }

// rgb(1, 2, 3) //?
