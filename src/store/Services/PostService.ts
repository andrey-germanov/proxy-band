import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPost } from "../../types/types";

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchPostsById: build.query<IPost[], number>({
      query: (userId) => ({
        url: `/posts`,
        params: {
          userId: userId,
        },
      }),
      providesTags: (result) => ["Post"],
    }),
  }),
});
