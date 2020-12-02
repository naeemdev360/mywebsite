const listItems = document.querySelectorAll(".sort__list--item");
const portfolios = document.querySelectorAll(".portfolio");

const listClicked = e => {
  listItems.forEach(list => list.classList.remove("active"));
  e.currentTarget.classList.add("active");
  const category = e.currentTarget.dataset.category;
  portfolios.forEach(p => {
    if (category == "all") {
      p.classList.remove("remove");
      return;
    }
    if (p.dataset.category !== category) {
      p.classList.add("remove");
    } else {
      p.classList.remove("remove");
    }
  });
};

export const sortable = () => {
  listItems.forEach(list => {
    list.addEventListener("click", listClicked);
  });
};
