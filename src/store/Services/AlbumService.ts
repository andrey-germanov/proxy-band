import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IAlbum } from '../../types/types';

export const albumAPI = createApi({
  reducerPath: "albumAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Album"],
  endpoints: (build) => ({
    fetchAlbumsById: build.query<IAlbum[], number>({
      query: (userId) => ({
        url: `/albums`,
        params: {
          userId: userId,
        }
      }),
      // providesTags: (result) => ["Users"],
    }),
  }),
});
