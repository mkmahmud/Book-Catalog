import {  useAppSelector } from "../../redux/hook";
import signUpImg from "../../assets/signUp.png";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {  useGetSingelBookQuery, useUpdateBookMutation } from "../../redux/features/books/bookApi";
import toast from "react-hot-toast";
const AddNewBook = () => {
  const { isLoading, user } = useAppSelector((state) => state.user);

  const navigate = useNavigate();
  useEffect(() => {
    if (!user.email) {
      navigate("/");
    }
  }, [isLoading, user]);

  const { id } = useParams();

  const { data, isLoading : dataLoading } = useGetSingelBookQuery(id);
  const book = data?.data; // Retrieve the book object from the data

  if (dataLoading) {
    return <p>Loading...</p>; // Add a loading state while data is being fetched
  }

  if (!book) {
    return <p>Book not found.</p>; // Handle the case when the book data is not available
  }

  const {
    _id,
    thumbnail,
    title,
    author,
    shortTitle,
    publisher,
    firstPublish,
    isbn,
    LANGUAGE,
    page,
    genre,
  } = book;


  const [updateBook, options] = useUpdateBookMutation();

  const handelSubmit = (e: any) => {
    e.preventDefault();
    const title = e.target.Title.value;
    const Thumbnail = e.target.Thumbnail.value;
    const shortTitle = e.target.shortTitle.value;
    const publisher = e.target.publisher.value;
    const firstPublish = e.target.firstPublish.value;
    const isbn = e.target.isbn.value;
    const page = e.target.page.value;
    const genre = e.target.genre.value;
    const author = e.target.Author.value;
    const language = e.target.Language.value;

    const bookData = {
      title,
      thumbnail: Thumbnail,
      shortTitle,
      publisher,
      firstPublish,
      isbn,
      page,
      genre,
      author,
      language,
      user: {
        profileImg:
          "https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-1024x1024.jpg",
        name: user.email,
      },
    };

    const dataContent = {
        id: _id,
        data: bookData
      }
  

    updateBook(dataContent)
    console.log(bookData)
  };

  useEffect(() => {
    if (options?.data) {
      toast.success("Updated Successfully !");
    }
  }, [options]);

  return (
    <div className="md:flex items-center p-5 justify-between">
      <div className="w-full md:w-2/6">
        <img src={signUpImg} alt="" />
      </div>
      <div className="w-full md:w-4/6">
        <div>
          <h2 className="text-mainBackground text-[30px] font-semibold">
            Update Book
          </h2>
          <p className="text-[#4F4F4F]">
            Create your own universe of your own Books collection
          </p>
          <div>
            <form onSubmit={handelSubmit}>
              <div className="form-controll my-4">
                <p className="text-[#AA4207]">Title</p>
                <input
                  type="text"
                  placeholder="Title"
                  className="outline-none border p-2 w-full rounded-xl"
                  name="Title"
                  id="Title"
                  required
                  defaultValue={title}

                />
              </div>
              <div className="form-controll my-4">
                <p className="text-[#AA4207]">Thumbnail</p>
                <input
                  type="text"
                  placeholder="Thumbnail"
                  className="outline-none border p-2 w-full rounded-xl"
                  name="Thumbnail"
                  id="Thumbnail"
                  required
                  defaultValue={thumbnail}
                />
              </div>
              <div className="form-controll my-4">
                <p className="text-[#AA4207]">Short Description</p>
                <input
                  type="text"
                  placeholder="Short Description"
                  className="outline-none border p-2 w-full rounded-xl"
                  name="shortTitle"
                  id="shortTitle"
                  defaultValue={shortTitle}
                  required
                />
              </div>
              <div className="form-controll my-4">
                <p className="text-[#AA4207]">publisher</p>
                <input
                  type="text"
                  placeholder="publisher"
                  className="outline-none border p-2 w-full rounded-xl"
                  name="publisher"
                  id="publisher"
                  defaultValue={publisher}
                  required
                />
              </div>
              <div className="form-controll my-4">
                <p className="text-[#AA4207]">Publish Date</p>
                <input
                  type="text"
                  placeholder="Publish Date"
                  className="outline-none border p-2 w-full rounded-xl"
                  name="firstPublish"
                  id="firstPublish"
                  defaultValue={firstPublish}
                  required
                />
              </div>
              <div className="form-controll my-4">
                <p className="text-[#AA4207]">Author</p>
                <input
                  type="text"
                  placeholder="Author"
                  className="outline-none border p-2 w-full rounded-xl"
                  name="Author"
                  defaultValue={author}
                  id="Author"
                  required
                />
              </div>
              <div className="form-controll my-4">
                <p className="text-[#AA4207]">Language</p>
                <input
                  type="text"
                  placeholder="Language"
                  className="outline-none border p-2 w-full rounded-xl"
                  name="Language"
                  id="Language"
                  defaultValue={LANGUAGE}
                  required
                />
              </div>
              <div className="form-controll my-4">
                <p className="text-[#AA4207]">isbn</p>
                <input
                  type="text"
                  placeholder="isbn"
                  className="outline-none border p-2 w-full rounded-xl"
                  name="isbn"
                  defaultValue={isbn}
                  id="isbn"
                  required
                />
              </div>
              <div className="form-controll my-4">
                <p className="text-[#AA4207]">Page</p>
                <input
                  type="number"
                  placeholder="Page"
                  className="outline-none border p-2 w-full rounded-xl"
                  name="page"
                  id="page"
                  defaultValue={page}
                  required
                />
              </div>
              <div className="form-controll my-4">
                <p className="text-[#AA4207]">Genre</p>
                <input
                  type="text"
                  placeholder="Genre"
                  className="outline-none border p-2 w-full rounded-xl"
                  name="genre"
                  id="genre"
                  defaultValue={genre}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-mainBackground w-full  text-white py-2 px-4 rounded-md"
              >
               Update this Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewBook;
