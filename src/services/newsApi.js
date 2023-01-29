import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsApiHeaders = {
  "X-Api-Key": "a851656a4602487f9f922a8d57d4bac2",
};
const createRequest = (url) => ({ url, headers: newsApiHeaders });

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2" }),
  endpoints: (builder) => ({
    getNewsCategory: builder.query({
      query: (category) =>
        createRequest(`/top-headlines?country=us&category=${category}`),
    }),

    getNewsSearch: builder.query({
      query: (searchTerm) => createRequest(`/everything?q=${searchTerm}`),
    }),
  }),
});

export const { useGetNewsCategoryQuery, useGetNewsSearchQuery } = newsApi;
