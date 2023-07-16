import { useGetAllWishlistQuery } from "../../redux/features/wishList/wishListApi";
import { useAppSelector } from "../../redux/hook";

const Wishlists = () => {
  const { user } = useAppSelector((state) => state.user);
  const { data, isLoading } = useGetAllWishlistQuery(user.email, {
    refetchOnMountOrArgChange: true,
  });

  

  return (
    <div className="container mx-auto">
      {isLoading && <h2 className="text-red-500">loading</h2>}
      <h1 className="text-3xl font-semibold mb-4">My Wishlist</h1>
      {data?.data && data?.data.length === 0 ? <p>No items in wishlist</p> : ""}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.data?.data &&
          data.data?.data.map((item: any) => (
            <li
              key={item._id}
              className="bg-white p-4 rounded shadow-md flex flex-col"
            >
              <img
                src={item.book.thumbnail}
                className="w-32 h-40 object-contain mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold">{item.book.title}</h2>
              <p className="text-sm text-gray-600">{item.book.author}</p>
              <div className="mt-auto flex justify-end">
                <button className="text-red-600 hover:text-red-800">
                  Remove
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Wishlists;
