function solution() {
  let answer;
  let sum = 0, min = Number.MAX_SAFE_INTEGER;

  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }

  answer = [sum, min];
  return answer;
}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));