//https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
    text = text.toLowerCase();
    text = text.split(' ').join('');
    text = text.split('.').join('');
    text = text.split('\'').join('');
    text = text.split('\[0\-9\]\+').join('');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let obj = Object.create({});
    for (let i = 0; i < alphabet.length; i++) {
        obj[alphabet[i]] = i + 1;
    }
    let answer = text.split('').map(x => obj[x]).join(' ');
    answer = answer.trim();  
    answer = answer.split('  ').join(' ');
    answer = answer.split('  ').join(' ');
    answer = answer.split('  ').join(' ');
    return answer;
}

// console.log(alphabetPosition('07%:,cf8'))