export const home = () => {
  const titleBox = document.querySelector(".home__content-text--title");
  const titles = titleBox.querySelectorAll("span");
  let currIndex = 3;
  titles.forEach((title, index) => {
    title.style.transform = `translateX(${index * 100}%)`;
  });

  const changedTitles = i => {
    titles.forEach((title, index) => {
      title.style.transform = `translateX(${
        (index + i - titles.length) * 100
      }%)`;
      title.style.opacity = index + i - titles.length === 0 ? 1 : 0;
    });
  };

  setInterval(() => {
    changedTitles(currIndex);
    currIndex--;
    if (currIndex === 0) {
      currIndex = 3;
    }
  }, 3000);
};
