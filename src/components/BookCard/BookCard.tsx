import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { useAddToWishListMutation } from "../../redux/features/wishList/wishListApi";

const BookCard = ({ data }: any) => {
  const { _id, thumbnail, title, user, shortTitle } = data;

  const { user: loggedUser } = useAppSelector((state) => state.user);
  const [addToWishList] = useAddToWishListMutation();

  const handelWishlist = (userEmail: any, book: string | null) => {
    const wishlistData = {
      userEmail,
      book,
    };

    addToWishList(wishlistData);
  };

  return (
    <div className=" p-2">
      <Link to={`/book-details/${_id}`}>
        <div className="p-2 border border-4">
          <img className="block mx-auto h-[250px]" src={thumbnail} alt="" />
        </div>
        <div className="my-2">
          <h2 className="text-titleColor text-2xl font-semibold">{title}</h2>
          <div className="flex justify-between items-center">
            <h5 className="text-xl py-2">{user?.name}</h5>
            <button>
              <i className="fa-sharp fa-solid fa-heart text-mainBackground"></i>
            </button>
          </div>
          <p className="text-mainText">
            {shortTitle}
            <Link to="/details/:id" className="text-mainBackground">
              read more
            </Link>
          </p>
          <div className="py-2">
            <i className="fa-solid fa-star text-ratingColor"></i>
            <i className="fa-solid fa-star text-ratingColor"></i>
            <i className="fa-solid fa-star text-ratingColor"></i>
            <i className="fa-solid fa-star text-ratingColor"></i>
            <i className="fa-solid fa-star text-ratingColor"></i>
          </div>
        </div>
      </Link>
      <div className="my-4">
        <button
          onClick={() => {
            handelWishlist(loggedUser.email, _id);
          }}
          className="outline outline-mainBackground text-mainBackground outline-1   py-2 px-6  rounded-md"
        >
          Add to Wish List
        </button>
      </div>
    </div>
  );
};

export default BookCard;
