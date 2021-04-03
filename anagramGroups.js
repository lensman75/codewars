let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

let group = [];

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
  for (let i = 0; i < item2.length; i++) {
    if (!(item2[i] in obj2)) {
      obj2[item2[i]] = 1;
    } else {
      obj2[(item2[i] = obj2[item[i]] + 1)];
    }
  }
  


  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  


  if (!(keys1.length == keys2.length)) {
    return false;
  }

  

  for (let keys in keys1) {
    
    if (!(keys1[keys] == keys2[keys])) {
      return false;
    }
  }
  return true;
}
compareObjects(strs[0],strs[1]); //?

let counter = 0;
let checkArray = [];

for (let i = 0; i < strs.length; i++){
  checkArray.push(1);
}

checkArray;

// for (let i = 0; i < strs.length; i++) {
//   if (checkArray[i] != 1) {
//     continue;
//   } else{
//     group[counter] = [];
//     group[counter].push(strs[i]);
//     checkArray[i] = 0;
//     for (let x = i+1; x < strs.length; x++){
//       if (compareObjects(strs[i],strs[x]) == true){
//         strs[i];//?
//         strs[x];//?
//         group[counter].push(strs[x])
//         checkArray[x] = 0
//       }
//     }
//   }
//   counter +=1;
// }

group;