export async function getData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    const result = (await response.json());
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.log('error message: ', error.message);
      throw new Error(`Error! status: ${error.message}`);
    }
  }
}

export async function getDataCards() {
  return await getData('https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7');
} 