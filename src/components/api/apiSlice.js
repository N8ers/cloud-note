import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const defaultUserId = 4;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (build) => ({
    getNotes: build.query({
      // baseUrl + '/notes'
      query: () => "/notes/slow",
    }),
    addNote: build.mutation({
      query: (body) => ({
        url: `posts`,
        method: "POST",
        body,
      }),
    }),
  }),
});

// useGetNotesQuery is autogenerated from 'getNotes'
export const { useGetNotesQuery } = apiSlice;
