import { useLocation, useParams } from "react-router-dom";
import BookCard from "../../components/BookCard/BookCard";
import { useGetAllbooksQuery } from "../../redux/features/books/bookApi";

const AllBooks = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchText = queryParams.get("serachText");


  let search = ''

  if(searchText){
    search = searchText
  }

  const { data, isLoading } = useGetAllbooksQuery(search, {refetchOnMountOrArgChange: true});


  return (
    <div>
      <div className="my-10">
        <h2 className="text-mainBackground text-[40px] font-semibold">
          All Books
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
        {isLoading && <h2 className="text-red-500">loading</h2>}

        {data && data.data.data.map((book: any) => <BookCard key={book._id} data={book}></BookCard>)}

  
      </div>
        <h2  className="text-xl text-red-500 my-10">{data && data.data.data.length === 0 ? `No Books Found by '${searchText}' this text ` : ''}</h2>
    </div>
  );
};

export default AllBooks;
