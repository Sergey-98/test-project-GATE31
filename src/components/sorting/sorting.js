export default function sorting(data, method) {
    let sortingData;
    function SortArrayAZ(x, y) {
        if (x.title < y.title) {
          return -1;
        }
        if (x.title > y.title) {
          return 1;
        }
        return 0;
      }
      function SortArrayZA(x, y) {
        if (x.title > y.title) {
          return -1;
        }
        if (x.title < y.title) {
          return 1;
        }
        return 0;
      }
      switch (method) {
        case 'By title, from A to Z':
            sortingData = data.sort(SortArrayAZ);
          break;
        case 'By title, from Z to A':
            sortingData = data.sort(SortArrayZA);
          break;
          case 'By ascending length':
            sortingData = data.sort((a, b) => a.title.length - b.title.length);
          break;
          case 'By descending length':
            sortingData = data.sort((a, b) => b.title.length - a.title.length);
          break;
      }
      return sortingData.length > 0 ? sortingData : data;
}