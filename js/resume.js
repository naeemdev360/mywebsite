export const skillWidth = isResume => {
  const percentageBox = document.querySelectorAll(".skill__name--persentage");
  const innerBar = document.querySelectorAll(".skill__bar--inner");
  percentageBox.forEach(box => (box.textContent = 0 + "%"));
  innerBar.forEach((bar, index) => {
    if (isResume) {
      let x = setInterval(() => {
        percentageBox[index].textContent =
          +percentageBox[index].textContent.slice(0, -1) + 1 + "%";
        if (
          Number(bar.dataset.level) ===
          Number(percentageBox[index].textContent.slice(0, -1))
        ) {
          clearInterval(x);
        }
      }, 1000 / +bar.dataset.level);
    }

    bar.style.width = isResume ? `${bar.dataset.level}%` : "0%";
  });
};
