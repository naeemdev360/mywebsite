export const contactForm = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibmFlZW0yNTIiLCJhIjoiY2tpNG0yN3V2MDl6bzJwcGJzampuOTkyaiJ9.hecYaIXlcm7rpSO1puaPmg";
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/naeem252/ckh0czbun86d31an2i3c8kv4m",
    center: [90.25821, 23.921109],
    zoom: 10,
  });
  map.scrollZoom.disable();
  const formControl = document.querySelectorAll(".form__control");

  const controlFocused = e => {
    const formGroup = e.target.closest(".form__group");
    formGroup.classList.add("input-focus");
  };
  const controlBlur = e => {
    const formGroup = e.target.closest(".form__group");
    formGroup.classList.remove("input-focus");
  };
  formControl.forEach(input => {
    input.addEventListener("focus", controlFocused);
    input.addEventListener("blur", controlBlur);
  });
};
