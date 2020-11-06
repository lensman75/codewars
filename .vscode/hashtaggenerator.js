// The Hashtag Generator
// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
    if (str.trim() == '') {
        return false;
    }
    str = str.split(' ').map(x => x.charAt(0).toUpperCase() + x.substr(1).toLowerCase()).join('');
    str = '#' + str;
    if (str.length > 140) {
        return false;
    }
    return str;
}

console.log(generateHashtag("code" + " ".repeat(140) + "wars"))