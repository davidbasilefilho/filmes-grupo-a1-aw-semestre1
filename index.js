const ids = ["basile", "giovanni", "filipe", "heloise", "matheus", "evelyn"];
let elements = ids.map((id) => document.getElementById(id));
let audio = document.getElementById("background-music");
audio.volume = 0.02;
console.log("Audio volume set to", audio.volume);

const toggle = (id) => {
  const element = document.getElementById(id);
  elements.map((el) => {
    if (el && el.id !== id) {
      el.classList.add("hidden");
    }
  });

  if (element) {
    element.classList.toggle("hidden");
  } else {
    console.error(`Element with id ${id} not found.`);
  }
};
