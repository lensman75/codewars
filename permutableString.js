// https://dmitripavlutin.com/how-to-compare-objects-in-javascript/
//Link above - compare objects, 3 subheader - don't clear 'Object.keys'...
//Works when both of strings are the same length.
function permutable(s1, s2) {
    let obj1 = {}, obj2 = {};
    for (let i = 0; i < s1.length; i++) {
        if (!(s1[i] in obj1)) {
            obj1[s1[i]] = 1;
        } else {
            obj1[s1[i]] += 1;
        }
    }
    for (let a = 0; a < s2.length; a++) {
        if (!(s2[a] in obj2)) {
            obj2[s2[a]] = 1;
        } else {
            obj2[s2[a]] += 1;
        }
    }

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