import emailjs from "emailjs-com";

export const contactForm = () => {
  const contactForm = document.getElementById("contactForm");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  mapboxgl.accessToken =
    "pk.eyJ1IjoibmFlZW0yNTIiLCJhIjoiY2tpNG0yN3V2MDl6bzJwcGJzampuOTkyaiJ9.hecYaIXlcm7rpSO1puaPmg";
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/naeem252/ckh0czbun86d31an2i3c8kv4m",
    center: [90.25821, 23.921109],
    zoom: 12,
  });
  map.scrollZoom.disable();
  const formControl = document.querySelectorAll(".form__control");

  const controlFocused = e => {
    const formGroup = e.target.closest(".form__group");
    formGroup.classList.add("input-focus");
  };
  const controlBlur = e => {
    const formGroup = e.target.closest(".form__group");
    console.log(!e.target.value.trim());
    if (!e.target.value.trim()) {
      formGroup.classList.remove("input-focus");
    }
  };
  formControl.forEach(input => {
    input.addEventListener("focus", controlFocused);
    input.addEventListener("blur", controlBlur);
  });

  //send mesage by email

  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    if (
      !name.value.trim() ||
      !email.value.trim() ||
      subject.value.trim() ||
      !message.value.trim()
    ) {
      alert("all field are required");
      return;
    }
    emailjs
      .sendForm(
        "service_88tj3th",
        "template_7znvnlb",
        e.target,
        "user_GVb7xRkB8QbqPXfKvKKpz"
      )
      .then(
        result => {
          console.log(result.text, result);
        },
        error => {
          console.log(error.text);
        }
      );
  });
};
