const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

// 9개 중 7개 선택 후 합이 100이 되는 조합을 찾음.

// 9개 총합을 구해놓고 2중 for문을 돌면서 2개를 뽑아서 총합에서 빼본다.
// splice 로 해당 i, j 제거
function solution (arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b);

  return arr;
};
console.log(solution(arr));