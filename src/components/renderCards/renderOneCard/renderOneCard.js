export default function renderOneCard(dataElem) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <h1 class="card_title">${dataElem.title}</h1>
    <p class="card_text">${dataElem.body}</p>
    <input type="checkbox" class = "input" id="check">
    <label for = "check">
      <div class = "button"></div>
    </label>
  `;
  card.querySelector('input').addEventListener('click', (elem) => {
    card.classList.toggle('active');
  });
  return card;
}
