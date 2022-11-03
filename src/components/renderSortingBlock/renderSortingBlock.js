export default function renderSortingBlock() {
  const sorting = document.createElement('div');
  sorting.classList.add('sorting_block');
  sorting.innerHTML = `
    <select class="sorting">
        <option selected disabled>Сортировка</option>
        <option>By title, from A to Z</option>
        <option>By title, from Z to A</option>
        <option>By ascending length</option>
        <option>By descending length</option>
    </select>
    <input type="submit" class="submit_button" value="Найти">
    `;
  return sorting;
}
