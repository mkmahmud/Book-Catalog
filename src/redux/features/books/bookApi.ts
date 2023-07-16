import { api } from "../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllbooks: builder.query({
      query: ({ search, filters }) => `/book/?searchTerm=${search}&${filters}`,
      providesTags: ["books"],
    }),
    getTopTenBook: builder.query({
      query: () => "/book/?page=1&limit=10&sortOrder=desc",
      providesTags: ["books"],
    }),
    createBook: builder.mutation({
      query: (data) => ({
        url: "/book/create-book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetAllbooksQuery,
  useGetTopTenBookQuery,
  useCreateBookMutation,
} = bookApi;
