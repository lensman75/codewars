// https://dmitripavlutin.com/how-to-compare-objects-in-javascript/
//Link above - compare objects, 3 subheader - don't clear 'Object.keys'...
//Works when both of strings are the same length.
function permutable(s1, s2) {
    let obj1 = {}, obj2 = {};

    function countSymbols(str, obj) {
        for (let i = 0; i < str.length; i++) {
            if (!(str[i] in obj)) {
                obj[str[i]] = 1;
            } else {
                obj[str[i]] += 1;
            }
        }
        return obj;
    }
    
    countSymbols(s1, obj1);
    countSymbols(s2, obj2);


    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}