import { getDataCards } from '../API/api.js';
import renderCards from '../renderCards/renderCards.js';
import sorting from '../sorting/sorting.js';
import renderSortingBlock from '../renderSortingBlock/renderSortingBlock.js';

async function App() {
  const main = document.querySelector('main');
  main.classList.add('main-container');
  main.append(renderSortingBlock());
  const sortList = document.querySelector('.sorting');
  const submit = document.querySelector('.submit_button');
  let data = await getDataCards();
  submit.addEventListener('click', () => {
    if ('URLSearchParams' in window) {
      const url = new URL(window.location);
      url.searchParams.set('sort', sortList.value);
      window.history.pushState({}, '', url);
    }
    data = sorting(data, sortList.value);
    document.querySelector('.cards').remove();
    renderCards(data);
  });
  renderCards(data);
}

export default App;
