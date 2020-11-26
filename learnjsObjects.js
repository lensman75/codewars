// // https://learn.javascript.ru/object
// // Tasks.

// // 1
// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// // 2
// let schedule = {};
// function isEmpty(obj) {
//     let i = 0;
//     for (let key in obj) {
//         i += 1;
//     }
//     if (i == 0) {
//         return true;
//     } else { return false }
// }
// console.log(isEmpty(schedule));
// schedule['8:30'] = 'get up';
// console.log(isEmpty(schedule));

// // 3
// const user = {
//     name: 'John'
// }
// user.name = 'Pete'; //Will work. Const don't allow to make new assignment to constant variable. user = {} - Error.

// // 4
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = 0;
// function sal (obj){
//     for (let key in obj){
//         console.log(obj[key]);
//         sum = sum + obj[key];
//     }
//     return sum;
// }
// sal (salaries, sum);

// // 5
// let menu = {
//     width: 200,
//     height: 300,
//     title: 'My menu'
// }
// function multiplyNumeric(obj){
//     for (let key in obj) {
//         if (typeof(obj[key]) == 'number') {
//             obj[key] = obj[key] * 2;
//         }
//     }
// }
// multiplyNumeric(menu);