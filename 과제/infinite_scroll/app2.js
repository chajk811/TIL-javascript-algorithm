// 참고 : https://velog.io/@dev-tinkerbell/%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B5%AC%ED%98%84%EB%B0%A9%EB%B2%95

// intersection observer
const infiniteScoll = () => {
  const ul = document.querySelector('ul');
  let li = document.querySelector('li:last-child');
  let count = ul.children.length;
  
  const io = new IntersectionObserver((entry, observer) => {
    const ioTarget = entry[0].target;
    
    if (entry[0].isIntersecting) {
      console.log('ioTarget: ', ioTarget);
      io.unobserve(li);

      li = ul.appendChild(document.createElement('li'));
      li.textContent = ++count;
      io.observe(li);
    }
  }, { threshold: 0.5 });
  io.observe(li);
}

infiniteScoll();