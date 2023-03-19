export const CARDS_QUANTITY = 8;

const getCards = async () => {
  const response = await fetch(`https://fakestoreapi.com/products?limit=${CARDS_QUANTITY}`);
  const data = await response.json();
  const result = await data;
  return result;
};

export default getCards;
