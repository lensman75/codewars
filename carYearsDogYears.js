//https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

var humanYearsCatYearsDogYears = function (humanYears) {
  let catYear, dogYear;
  let otherCatYears = 4;
  let otherDogYears = 5;
  switch (humanYears) {
    case 1:
      catYear = 15;
      dogYear = 15;
      break;
    case 2:
      catYear = 15 + 9;
      dogYear = 15 + 9;
      break;
    default:
      catYear = 15 + 9;
      dogYear = 15 + 9;
      break;
      return catYear, dogYear;
  }
  if (humanYears > 2) {
    for (let i = 2; i < humanYears; i++) {
      catYear += otherCatYears;
      dogYear += otherDogYears;
    }
  }

  return [humanYears, catYear, dogYear];
};

//   humanYearsCatYearsDogYears(1);//?
// Best practise
// var humanYearsCatYearsDogYears = function(y) {
//     if (y == 1) return [1, 15, 15]
//     if (y == 2) return [2, 24, 24]
//     return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
//   }

// const humanYearsCatYearsDogYears = (humanYears) => [
//   humanYears,
//   (humanYears - 1 ? 16 : 11) + 4 * humanYears,
//   (humanYears - 1 ? 14 : 10) + 5 * humanYears,
// ];
