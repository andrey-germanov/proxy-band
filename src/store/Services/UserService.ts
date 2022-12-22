import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from '../../types/types';

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUser[], number>({
      query: (limit = 5) => ({
        url: `/users`,
        params: {
          _limit: limit
        }
      }),
    }),
  }),
});
