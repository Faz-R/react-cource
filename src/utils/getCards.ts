export const CARDS_QUANTITY = 8;

const getCards = async () => {
  const response = await fetch(`https://dummyjson.com/products?limit=${CARDS_QUANTITY}`);
  const data = await response.json();
  const result = await data.products;

  return result;
};

export default getCards;
