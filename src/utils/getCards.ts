import { ICard } from '../components/card/interface';

interface CardProps {
  search: string;
}

const getCards = async ({ search }: CardProps) => {
  const response = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${search}`);
  const data = await response.json();
  const result = await data.data;
  const cardsArray: ICard[] = await result.map(async (e: { api_link: string }) => {
    const response = await fetch(e.api_link);
    const data = await response.json();
    const result = await data.data;
    return result;
  });
  const finish = Promise.all(cardsArray);
  return finish;
};

export default getCards;
