import BookCard from "../../components/BookCard/BookCard";

const AllBooks = () => {
  return (
    <div>
      <div className="my-10">
        <h2 className="text-mainBackground text-[40px] font-semibold">
          All Books
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
        <BookCard></BookCard>
      </div>
    </div>
  );
};

export default AllBooks;
