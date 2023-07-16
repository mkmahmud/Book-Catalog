import { api } from "../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllWishlist: builder.query({
      query: (id) => `/wishlist/?email=${id}`,
      providesTags: ["wishList"],
    }),
    addToWishList: builder.mutation({
      query: (data) => ({
        url: "/wishlist",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["wishList"],
    }),
  }),
});

export const { useGetAllWishlistQuery, useAddToWishListMutation } = bookApi;
