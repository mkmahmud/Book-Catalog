import FilledButton from "../../components/Buttons/FilledButton";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import u1 from "../../assets/user/u2.png";
import u2 from "../../assets/user/u3.png";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetSingelBookQuery,
} from "../../redux/features/books/bookApi";
import { toast } from "react-hot-toast";
import { useAppSelector } from "../../redux/hook";

const BookDetails = () => {
  const { user: loggedInUser } = useAppSelector((state) => state.user);

  const { id } = useParams();
  const [deleteBook] = useDeleteBookMutation();
  const { data, isLoading } = useGetSingelBookQuery(id);
  const book = data?.data; // Retrieve the book object from the data

  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading...</p>; // Add a loading state while data is being fetched
  }

  if (!book) {
    return <p>Book not found.</p>; // Handle the case when the book data is not available
  }

  const {
    _id,
    thumbnail,
    title,
    user,
    author,
    shortTitle,
    publisher,
    firstPublish,
    isbn,
    LANGUAGE,
    page,
    genre,
    reviews,
  } = book;

  const handelDelete = (id: any) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      deleteBook(id)
        .unwrap()
        .then(() => {
          // Handle successful deletion
          toast.success("Book deleted successfully!");
          navigate("/all-books");
        });
    }
  };

  return (
    <div>
      <div className="md:flex my-10 items-center">
        <div className="w-full md:w-2/6 mx-2">
          <div className="">
            <img
              className="block mx-auto p-2 border border-4"
              src={thumbnail}
              alt=""
            />
          </div>
          {loggedInUser?.email && (
            <div className="flex justify-around my-5">
              <FilledButton
                path={`/edit-book/${_id}`}
                content="Edit"
              ></FilledButton>
              <button
                onClick={() => {
                  handelDelete(_id);
                }}
                className="outline outline-mainBackground text-mainBackground outline-1   py-2 px-6  rounded-md"
              >
                Delete
              </button>
            </div>
          )}
        </div>
        <div className="w-full md:w-4/6 mx-2 bg-[#F4F4F4] px-4 py-2">
          <h2 className="text-3xl font-semibold py-2">{title}</h2>
          <div className="flex  py-4">
            <div className="flex items-center">
              <img
                className="rounded-full h-10 w-10"
                src={user.profileImg}
                alt=""
              />
              {/* <h5 className="text-mainText px-2"> Sylve Fox</h5> */}
            </div>
            <button className="ml-20">
              <i className="fa-sharp fa-solid fa-heart text-mainBackground"></i>
            </button>
          </div>
          <div className="flex py-2">
            <div className="py-2">
              <i className="fa-solid fa-star text-ratingColor"></i>
              <i className="fa-solid fa-star text-ratingColor"></i>
              <i className="fa-solid fa-star text-ratingColor"></i>
              <i className="fa-solid fa-star text-ratingColor"></i>
              <i className="fa-solid fa-star text-ratingColor"></i>
            </div>
            <div className="flex items-center ml-10 ">
              <i className="fa-sharp fa-solid fa-share-nodes px-2"></i>
              <span>9082</span>
            </div>
          </div>
          <div className="text-mainText my-2">
            <p className="my-4">{shortTitle}</p>
            <ul>
              <li>
                <span className="font-semibold">PUBLISHER:</span> {publisher}
              </li>
              <li>
                <span className="font-semibold">PUBLISHED:</span> {firstPublish}
              </li>
              <li>
                <span className="font-semibold">ISBN:</span> {isbn}
              </li>
              <li>
                <span className="font-semibold">LANGUAGE:</span> {LANGUAGE}
              </li>
              <li>
                <span className="font-semibold">PAGES:</span> {page}
              </li>
              <li>
                <span className="font-semibold">GENRE:</span> {genre}
              </li>
              <li>
                <span className="font-semibold">Author:</span> {author}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="review">
        <h2 className="text-[20px] font-semibold ">WRITE REVIEW</h2>
        <div className="flex items-center ">
          <img src={u2} alt="" />
          <form className="ml-10 w-full">
            <input
              className="bg-[#F4F4F4] pl-2 h-[60px] w-full outline-none rounded-xl"
              type="text"
              name=""
              id=""
              placeholder="Review"
            />
          </form>
        </div>
        <div>
          {reviews.map((review: any, index: number) => (
            <ReviewCard
              key={index} // Use the index as the key (not recommended if the order of items may change)
              img={u1}
              name={review.author}
              review={review.comment}
            ></ReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
