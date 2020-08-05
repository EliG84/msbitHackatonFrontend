export const getProducts = async (query) => {
  const url = `https://msbit-backend-eli.herokuapp.com/api/products/${query}`;
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};
