import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICard } from '../../components/card/interface';
import { ResponseCard } from '../interface';

export const itemApi = createApi({
  reducerPath: 'itemApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.artic.edu/api/v1/artworks' }),
  endpoints: (build) => ({
    searchItems: build.query<ICard[], string>({
      query: (search = '') => ({ url: '/search', params: { q: search } }),
      transformResponse: async (response: ResponseCard) =>
        await Promise.all(
          response.data.map(async (e: { api_link: string }) => {
            const response = await fetch(e.api_link);
            const data = await response.json();
            const result = await data.data;
            return result;
          })
        ),
    }),
  }),
});
