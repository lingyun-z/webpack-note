import "./index.css";

function component() {
  const element = document.createElement("div");
  element.innerHTML = "Hello world";
  element.classList.add("color-red");
  return element;
}

document.body.appendChild(component());
