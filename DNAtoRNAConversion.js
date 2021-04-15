// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript
let dic = {
  G: 'G',
  C: 'C',
  A: 'A',
  T: 'U',
  U: 'T',
};

function DNAtoRNA(dna) {
  return dna
    .split('')
    .map((v) => {
      return dic[v];
    })
    .join('');
}
