import renderOneCard from "./renderOneCard/renderOneCard.js";

export default function renderCards(data) {
  const main = document.querySelector('main');
  main.classList.add('main-container');
  data.map((elem) => main.append(renderOneCard(elem)));
}