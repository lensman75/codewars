// https://dmitripavlutin.com/how-to-compare-objects-in-javascript/
//Link above - compare objects, 3 subheader - don't clear 'Object.keys'...
//Works when both of strings are the same length.
function permutable(s1, s2) {
    let obj1 = {}, obj2 = {};
    function countSymbols(str) {
        let obj = {}
        for (let i = 0; i < str.length; i++) {
            if (!(str[i] in obj)) {
                obj[str[i]] = 1;
            } else {
                obj[str[i]] += 1;
            }
        }
        return obj;
    }
    obj1 = countSymbols(s1);
    obj2 = countSymbols(s2);

    countSymbols(s1, obj1);
    countSymbols(s2, obj2);
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length != keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

function mainFunc(st1, st2) {
    if (st1.length > st2.length) {
        return false;
    }
    for (let i = 0; i < st2.length; i++) {
        console.log(st2.slice(i, i + st1.length));
        let slicedString = st2.slice(i, i + st1.length);
        if (permutable(st1, slicedString) == true) {
            return true;
        }
    }
    return false;
}