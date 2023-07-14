import hreoImage from "../../assets/hero.png";

const Home = () => {
  return (
    <div className="md:flex justify-around items-center my-40 ">
      <div className="w-full md: mx-10">
        <p className="text-[#626262] font-semibold">Let’s make the best investments</p>
        <h2 className="text-[#626262] font-bold text-[40px]">
          The <span className="text-[#FF630B]">Chyra </span><br /> eBook Library
        </h2>
        <p className="#626262">
          Browse from the largest collection of ebooks <br /> Read stories from
          anywhere, at anytime.
        </p>
        <div className="flex items-center justify-between border-2 p-2 rounded-xl my-10 ">
          <input
            type="text"
            placeholder="Search by book title, author name"
            className="py-2 px-4 rounded-l-md focus:outline-none focus:ring-0 w-full "
          />
          <button className="bg-[#FF630B]  text-white py-2 px-4 rounded-md">
            Search
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center md:mx-10">
        <div className="relative ">
          <div className="elips bg-[#FF975C] h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full "></div>
          <img src={hreoImage} className="absolute top-0 h-[330px] w-[330px] md:h-[600px] md:w-[600px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
