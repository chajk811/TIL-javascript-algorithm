function solution(arr) {
  let answer, min = Number.MAX_SAFE_INTEGER;
  
  for (let i=0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }

  answer = min;
  
  return answer;
}

// 내장함수 사용
function solution2(arr) {
  let answer = Math.min(...arr);
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
console.log(solution2(arr));