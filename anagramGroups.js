let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

let group = new Array();

function compareObjects(item1, item2) {
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < item1.length; i++) {
    if (!(item1[i] in obj1)) {
      obj1[item1[i]] = 1;
    } else {
      obj1[(item1[i] = obj1[item[i]] + 1)];
    }
  }
  //   obj1;
  for (let i = 0; i < item2.length; i++) {
    if (!(item2[i] in obj2)) {
      obj2[item2[i]] = 1;
    } else {
      obj2[(item2[i] = obj2[item[i]] + 1)];
    }
  }
  //   obj2;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let keys in keys1) {
    if (!(keys1[keys] !== keys2[keys])) {
      return false;
    }
  }
  return true;
}

let counter = 0;

for (let i = 1; i < strs.length; i++) {
  group[counter] = new Array();
  group[counter].push(strs[0]);
  group[counter].push(strs[i]);
  if (compareObjects(strs[0], strs[i]) == true) {
    group[counter].push(strs[i]);
  } else {
    continue;
  }
  for (let x = strs.length; x > 0; x--) {
    if (compareObjects(strs[0], strs[x - 1]) == true){
      strs.splice(x-1,1);

    } else {continue}
    strs.shift();
  }
  counter += 1;
}

group;
