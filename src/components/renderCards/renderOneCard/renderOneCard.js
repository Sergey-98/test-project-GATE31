export default function renderOneCard(dataElem) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <h1>${dataElem.title}</h1>
    <p>${dataElem.body}</p>
  `;
  return card;
}