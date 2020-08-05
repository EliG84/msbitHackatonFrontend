export const getProducts = async (query) => {
  const url = `http://localhost:3001/api/products/${query}`;
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};
