import hreoImage from "../../assets/hero.png";
import horor from "../../assets/genre/horor.png";
import GenreCard from "../../components/genreCard/GenreCard";
import romatic from "../../assets/genre/romantic.png";
import tech from "../../assets/genre/tech.png";
import romance from "../../assets/genre/romance.png";
import { Link, useNavigate } from "react-router-dom";
import BookCard from "../../components/BookCard/BookCard";
import { useGetTopTenBookQuery } from "../../redux/features/books/bookApi";

const Home = () => {
  const { data, isLoading } = useGetTopTenBookQuery(undefined);

  const navigate = useNavigate()
  const handelSumit = (e: any) => {
    e.preventDefault();
    const searchWords = e.target.searchText.value;
    navigate(`/all-books/?serachText=${searchWords}`)
    
  };

  return (
    <div>
      <div className="md:flex justify-around items-center my-40 ">
        <div className="w-full md: mx-10">
          <p className="text-mainText font-semibold">
            Let’s make the best investments
          </p>
          <h2 className="text-mainText font-bold text-[40px]">
            The <span className="text-mainBackground">Chyra </span>
            <br /> eBook Library
          </h2>
          <p className="text-mainText">
            Browse from the largest collection of ebooks <br /> Read stories
            from anywhere, at anytime.
          </p>
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
        <div className="w-full flex justify-center md:mx-10">
          <div className="relative ">
            <div className="elips bg-[#FF975C] h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full "></div>
            <img
              src={hreoImage}
              className="absolute top-0 h-[330px] w-[330px] md:h-[600px] md:w-[600px]"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Genre */}

      <div>
        <div className="flex justify-between items-center ">
          <h1 className="text-[40px] text-mainBackground font-semibold my-10">
            Genre
          </h1>
          <Link className="text-mainBackground" to="/">
            see all
          </Link>
        </div>
        <div className="md:flex justify-center">
          <GenreCard route="/" img={horor} text="Horor"></GenreCard>
          <GenreCard route="/" img={romatic} text="Romantic"></GenreCard>
          <GenreCard route="/" img={tech} text="Tech"></GenreCard>
          <GenreCard route="/" img={romance} text="Romance"></GenreCard>
        </div>
      </div>

      {/* Top 10 recent Books */}
      <div>
        <h2 className="text-[40px] text-mainBackground font-semibold my-10">
          {" "}
          Top 10 recent added{" "}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-2">
          {isLoading && <h2 className="text-red-500">loading</h2>}

          {data &&
            data.data.data.map((book: any) => (
              <BookCard key={book._id} data={book}></BookCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
