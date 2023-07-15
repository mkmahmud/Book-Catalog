import BookCard from "../../components/BookCard/BookCard";
import { useGetAllbooksQuery } from "../../redux/features/books/bookApi";

const AllBooks = () => {
  const { data, isLoading } = useGetAllbooksQuery(undefined);

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
    </div>
  );
};

export default AllBooks;
