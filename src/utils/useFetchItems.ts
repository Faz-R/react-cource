import { itemApi } from '../store/reducers/ItemService';

export const useFetchItems = (search: string) => {
  const { data: items, isLoading, isFetching, error } = itemApi.useSearchItemsQuery(search);
  return { data: items, isLoading, isFetching, error };
};
