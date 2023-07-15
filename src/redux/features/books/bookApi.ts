import { api } from "../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllbooks: builder.query({
      query: () => "/book",
    }),
  }),
});

export const { useGetAllbooksQuery } = bookApi;
