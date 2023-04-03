export const CARDS_QUANTITY = 8;

interface CardProps {
  limit: number;
}

const getCards = async ({ limit }: CardProps) => {
  const response = await fetch(`https://api.artic.edu/api/v1/products?limit=${limit}`);
  const data = await response.json();
  const result = await data.data;

  return result;
};

export default getCards;
