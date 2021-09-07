// forEach, map, filter, reduce methods

arr = [10, 11, 12, 13, 14, 15];

// forEach
// arr.forEach((v, i) => {
//   console.log(v, i, this);
// });

// map
let answer = arr.map(function (v, i) {
  return v * v;
});
let answer2 = arr.map(v => v * v);
console.log(answer);
console.log(answer2);