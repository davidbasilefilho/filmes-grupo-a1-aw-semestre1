const ids = ["basile", "giovanni", "filipe", "heloise", "matheus", "evelyn"];
const elements = ids.map((id) => document.getElementById(id));

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
