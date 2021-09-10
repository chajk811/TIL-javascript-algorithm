// forEach, map, filter, reduce methods

arr = [10, 11, 12, 13, 14, 15];

// // forEach
// arr.forEach((v, i) => {
//   console.log(v, i, this);
// });

// // map
// let answer = arr.map(function (v, i) {
//   return v * v;
// });
// let answer2 = arr.map(v => v * v);
// console.log(answer);
// console.log(answer2);

// // filter
// let answer = arr.filter(function (v, i) {
//   // console.log(this);
//   return v % 2 === 0;
// }, [1, 2]);
// let answer2 = arr.filter(x => x % 2 === 1);
// console.log(answer);
// console.log(answer2);

// // reduce
// let answer = arr.reduce(function (acc, v) {
//   return acc + v;
// }, 0);
// let answer2 = arr.reduce((acc, v) => acc+ v, 0);
// console.log(answer);
// console.log(answer2);
const array1 = [1, 2, 3, 4];
const reducer = (prev, curr) => prev + curr;

console.log(array1.reduce(reducer)); // 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5)); // 5 + 1 + 2 + 3 + 4