import { useAppDispatch } from "../../redux/hook";
import signUpImg from "../../assets/signUp.png";

const AddNewBook = () => {
  const dispatch = useAppDispatch();

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

    const bookData = {
        title,
        Thumbnail,
        shortTitle,
        publisher,
        firstPublish,
        isbn,
        page,
        genre
    }
    
    console.log(bookData)

    
  };
  return (
    <div className="md:flex items-center p-5 justify-between">
      <div className="w-full md:w-2/6">
        <img src={signUpImg} alt="" />
      </div>
      <div className="w-full md:w-4/6">
        <div>
          <h2 className="text-mainBackground text-[30px] font-semibold">
            Add New Book
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
                  required
                />
              </div>
              <div className="form-controll my-4">
                <p className="text-[#AA4207]">First Publish</p>
                <input
                  type="text"
                  placeholder="First Publish"
                  className="outline-none border p-2 w-full rounded-xl"
                  name="firstPublish"
                  id="firstPublish"
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
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-mainBackground w-full  text-white py-2 px-4 rounded-md"
              >
                Add a new book
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewBook;
