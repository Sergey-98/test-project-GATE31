import renderOneCard from "./renderOneCard/renderOneCard.js";

export default function renderCards(data) {
  const main = document.querySelector('main');
  const cards = document.createElement('div');
  cards.classList.add('cards');
  data.map((elem) => cards.append(renderOneCard(elem)));
  main.append(cards);
}