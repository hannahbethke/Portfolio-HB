// Card Flip   

const card = document.querySelector(".flip");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", ({target}) => {
    target.closest('.flip').classList.toggle("isFlipped");
  });
});

  // Animate Lettering

  let text = document.getElementById('text');
  let newDom = '';
  let animationDelay = 6;

  for(let i = 0; i < text.innerText.length; i++) {
      newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
  };

  text.innerHTML = newDom;
  let length = text.children.length;

  for(let i = 0; i < length; i++) {
      text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
  };