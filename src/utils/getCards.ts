export const CARDS_QUANTITY = 8;

interface CardProps {
  search: string;
}

const getCards = async ({ search }: CardProps) => {
  const response = await fetch(
    `https://api.artic.edu/api/v1/artworks/search?q=${search}?page=0&limit=${CARDS_QUANTITY}`
  );
  const data = await response.json();
  const result = await data.data;
  const arr = await result.map(async (e: { api_link: string }) => {
    const response = await fetch(e.api_link);
    const data = await response.json();
    const result = await data.data;
    return result;
  });
  const finish = Promise.all(arr);
  return finish;
};

export default getCards;
