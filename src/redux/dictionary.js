import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dictionaryApi = createApi({
  reducerPath: "dictionaryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sozluk.gov.tr/",
  }),
  endpoints: (builder) => ({
    getResponseByDictionary: builder.query({
      query: () => "gts?ara=biz",
    }),
  }),
});

export const { useGetResponseByDictionary } = dictionaryApi;
