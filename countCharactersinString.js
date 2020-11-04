// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    if (string.length == 0) {
        return {};
    } else {
        let a = {}
        let strarr = string.split('');
        for (let i = 0; i < strarr.length; i++){
            if (!(strarr[i] in a)) {
                a[strarr[i]] = 1;
            } else {
                a[strarr[i]]++;
            }
        }
        return a;
    }
}

//Best practice
// function count (string) {   
//     var count = {}; 
//     string.split('').forEach(function(s) { 
//        count[s] ? count[s]++ : count[s] = 1; 
//     }); 
//     return count; 
//   }