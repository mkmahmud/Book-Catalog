import { api } from "../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllbooks: builder.query({
      query: () => "/book",
    }),
    getTopTenBook: builder.query({
      query: () => "/book/?page=1&limit=10&sortOrder=desc",
    }),
  }),
});

export const { useGetAllbooksQuery, useGetTopTenBookQuery } = bookApi;
