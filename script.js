

function FrontOfCard() {
    return (
      `<div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0">
        FRONT OF CARD
      </div>`
    );
  }

  function BackOfCard() {
    return (
      `<div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 card-back">
        BACK OF CARD
      </div>`
    );
  }

 function FlipHover() {
    return (
      `<div className="relative w-96 h-60 rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-700 card">
        <FrontOfCard />
        <BackOfCard />
      </div>`
    );
  }

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