export const CARDS_QUANTITY = 8;

const getCards = async () => {
  const response = await fetch(`https://api.artic.edu/api/v1/products?limit=${CARDS_QUANTITY}`);
  const data = await response.json();
  const result = await data.data;
  console.log(result);

  return result;
};

export default getCards;
