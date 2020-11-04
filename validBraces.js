// https://www.codewars.com/kata/5277c8a221e209d3f6000b56

// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(braces) { 
    console.log(braces); 
    let answer = false; 
    let arr1 = []; 
    if (braces[0] == '}' || braces[0] == ']' || braces[0] == ')' || braces.length % 2 != 0 || braces.length <= 1) { 
        return answer; 
    } 
    else { 
        for (let i = 0; i < braces.length; i++) { 
            if ( (braces[i] == '(') || (braces[i] == '[') || (braces[i] == '{') ) { 
                arr1.push(braces[i]); 
            } 
            else { 
                answer = true; 
                switch (arr1.pop()) { 
                    case '(': if (braces[i] != ')') { return false } break; 
                    case '[': if (braces[i] != ']') { return false } break; 
                    case '{': if (braces[i] != '}') { return false } break; 
                    default: return answer = false; 
                } 
            } 
        } 
    } 
    return answer;    
}

//Best practice
// function validBraces(braces){ 
//   var matches = { '(':')', '{':'}', '[':']' }; 
//   var stack = []; 
//   var currentChar; 
//   for (var i=0; i<braces.length; i++) { 
//     currentChar = braces[i]; 
//     if (matches[currentChar]) { // opening braces 
//       stack.push(currentChar); 
//     } else { // closing braces 
//       if (currentChar !== matches[stack.pop()]) { 
//         return false; 
//       } 
//     } 
//   } 
//   return stack.length === 0; // any unclosed braces left? 
// }
//Best practice
// function validBraces(braces){ 
//  while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")} 
//  return !braces.length; 
// }