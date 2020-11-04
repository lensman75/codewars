//https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

function list(names) {
    let arr = [];

    for (let i = 0; i < names.length; i++) {
        arr.push(names[i].name);
    }
    if (arr.length == 0) {
        return '';
    } else if (arr.length == 1) {
        return arr[0];
    } else {
        let ans;
        ans = arr.pop();
        return arr.join(', ') + ' & ' + `${ans}`;
    }
}

// Best practices
// function list(names){
//     return names.reduce(function(prev, current, index, array){
//       if (index === 0){
//         return current.name;
//       }
//       else if (index === array.length - 1){
//         return prev + ' & ' + current.name;
//       } 
//       else {
//         return prev + ', ' + current.name;
//       }
//     }, '');
//    }

//Second variant
// function list(names) {
//     var xs = names.map(p => p.name)
//     var x = xs.pop()
//     return xs.length ? xs.join(", ") + " & " + x : x || ""
// }