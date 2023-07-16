import { useLocation, useNavigate } from "react-router-dom";
import BookCard from "../../components/BookCard/BookCard";
import { useGetAllbooksQuery } from "../../redux/features/books/bookApi";
import { useState } from "react";

const AllBooks = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchText = queryParams.get("serachText");

  const navigate = useNavigate();

  let search = "";
  let filters = "";

  if (searchText) {
    search = searchText;
  }

  const handelSumit = (e: any) => {
    e.preventDefault();
    const searchWords = e.target.searchText.value;
    navigate(`/all-books/?serachText=${searchWords}`);
  };

  const { data, isLoading,refetch } = useGetAllbooksQuery(
    { search, filters },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    if (isToggled) {
      filters = "sortBy=firstPublish&sortOrder=desc";
    }else{
      filters=''
    }
    refetch()
  };

  return (
    <div>
      <div className="my-4 flex justify-between">
        {/* <h2 className="text-mainBackground text-[40px] font-semibold">
          All Books
        </h2> */}
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              className="hidden"
              checked={isToggled}
              onChange={handleToggle}
            />
            <div className="w-10 h-6 bg-gray-700 rounded-full shadow-inner"></div>
            <div
              className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                isToggled ? "translate-x-6" : ""
              }`}
            ></div>
          </div>
          <span className="ml-2 text-sm">sort by year</span>
        </label>

        <div>
          <form onSubmit={handelSumit}>
            <div className="flex items-center justify-between border-2 p-2 rounded-xl my-10 ">
              <input
                type="text"
                placeholder="Search by book title, author name"
                className="py-2 px-4 rounded-l-md focus:outline-none focus:ring-0 w-full "
                id="searchText"
                name="searchText"
              />
              <button
                type="submit"
                className="bg-mainBackground  text-white py-2 px-4 rounded-md"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
        {isLoading && <h2 className="text-red-500">loading</h2>}

        {data &&
          data.data.data.map((book: any) => (
            <BookCard key={book._id} data={book}></BookCard>
          ))}
      </div>
      <h2 className="text-xl text-red-500 my-10">
        {data && data.data.data.length === 0
          ? `No Books Found by '${searchText}' this text `
          : ""}
      </h2>
    </div>
  );
};

export default AllBooks;
