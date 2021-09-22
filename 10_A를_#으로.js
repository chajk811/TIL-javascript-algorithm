function solution (s) {
  let answer = '';
  for (x of s) {
    if (x === 'A') answer += '#';
    else answer += x;
  }
  return answer;
}

function solution2 (s) {
  let answer = s;
  answer = answer.replace(/A/g, '#');
  
  return answer;
}

let str = 'BANANA';
// console.log(solution(str));
console.log(solution2(str));