export const paralex = e => {
  console.log("Hi");
  const paralex = document.getElementById("paralex");
  paralex.style.backgroundPositionX = `${e.pageX * 0.04 + 40}%`;
  paralex.style.backgroundPositionY = `${e.pageY * 0.04 + 40}%`;
};
