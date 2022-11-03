import { getDataCards } from '../API/api.js';
import renderCards from '../renderCards/renderCards.js';
import sorting from '../sorting/sorting.js';
import renderSortingBlock from '../renderSortingBlock/renderSortingBlock.js';

async function App() {
  const main = document.querySelector('main');
  main.classList.add('main-container');
  main.append(renderSortingBlock());
  const sortList = document.querySelector('.sorting');
  let data = await getDataCards();
  sortList.addEventListener('change', (event) => {
    data = sorting(data, event.target.value);
    document.querySelector('.cards').remove();
    renderCards(data);
  });
  renderCards(data);
}

export default App;
