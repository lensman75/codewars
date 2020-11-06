// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

// You need to return a string that looks like a diamond shape when printed on the screen,
// using asterisk(*) characters.Trailing spaces should be removed, and every line must be terminated with a newline character(\n).

// Return null / nil / None /... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

//     Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n) {
    let mainArr = [];
    let dia = '';

    function isOdd(x) {
        return !(x % 2) == 0;
    }
    
    if (n == 2 || n < 1) { return null; }
    
    else {
        for (let i = n; i >= 0; i--) {
            if (isOdd(i)) {
                mainArr.push(' '.repeat(n-i) + '*'.repeat(i) + '\n')
            }
        }
        for (let i = n - 1; i >= 0; i--) {
            if (isOdd(i)) {
                mainArr.unshift(' '.repeat(n-i) + '*'.repeat(i) + '\n');
            }
        }
    }

    dia = mainArr.join('')
    return dia;
}

console.log(diamond(5));

console.log(diamond(7));