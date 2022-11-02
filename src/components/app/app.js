import { getDataCards } from '../API/api.js'; 
import renderCards from '../renderCards/renderCards.js';

async function App() {
  const data = await getDataCards();
  console.log(data);
  renderCards(data);
}

export default App;