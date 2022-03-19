export const mouseMoveParalex = (e) => {
  const moveValueX = e.pageX * 0.04 + 40;
  const moveValueY = e.pageY * 0.04 + 40;
  const paralex = document.getElementById("paralex");
  paralex.style.backgroundPositionX = `${e.pageX * 0.04 + 40}%`;
  paralex.style.backgroundPositionY = `${e.pageY * 0.04 + 40}%`;
};
export const paralex = () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const paralex = document.getElementById("paralex");
  //Reset html divs
  paralex.innerHTML = "";
  for (let i = 0; i < 300; i++) {
    const div = document.createElement("div");
    div.className = "paralex__box";
    paralex.appendChild(div);
  }

  anime({
    targets: ".paralex__box",
    translateX: function () {
      return anime.random(-windowWidth, windowWidth);
    },
    translateY: function () {
      return anime.random(-windowHeight, windowHeight);
    },
    scale: function () {
      return anime.random(1, 3);
    },
    duration: 2000,
  });
};

// mouseMoveParalex();
