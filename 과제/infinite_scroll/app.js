// 참고 : https://velog.io/@dev-tinkerbell/%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B5%AC%ED%98%84%EB%B0%A9%EB%B2%95

// addEventListener => scroll
const ul = document.querySelector('ul');

// addEventListener => scoll
document.addEventListener('scroll', () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    let li = document.createElement('li');
    let count = ul.children.length;
    li.textContent = ++count;
    ul.appendChild(li)
  }
});
