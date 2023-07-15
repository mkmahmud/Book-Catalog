import image from "../../assets/books/book1.png";
import FilledButton from "../../components/Buttons/FilledButton";
import OutlinedButton from "../../components/Buttons/OutlinedButton";
import user1 from "../../assets/user/user1.png";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import u1 from "../../assets/user/u2.png";
import u2 from "../../assets/user/u3.png"

const BookDetails = () => {
  return (
    <div>
      <div className="md:flex my-10 items-center">
        <div className="w-full md:w-2/6 mx-2">
          <div className="">
            <img
              className="block mx-auto p-2 border border-4"
              src={image}
              alt=""
            />
          </div>
          <div className="flex justify-around my-5">
            <FilledButton path="/" content="Add to cart"></FilledButton>
            <OutlinedButton path="/" content="Read Now"></OutlinedButton>
          </div>
        </div>
        <div className="w-full md:w-4/6 mx-2 bg-[#F4F4F4] px-4 py-2">
          <h2 className="text-3xl font-semibold py-2">The Secreet Window</h2>
          <div className="flex  py-4">
            <div className="flex items-center">
              <img src={user1} alt="" />
              <h5 className="text-mainText px-2"> Sylve Fox</h5>
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
            <p className="my-4">
              Whoever said that time heals all wounds . . . lied. A decade after
              the death of her husband, Nari Yoon still mourns. On the ten-year
              anniversary of the worst day of her life, co-worker Lucas Tucker
              tries to.
            </p>
            <ul>
              <li>
                <span className="font-semibold">PUBLISHER:</span> Penner
                Publishing (June 23, 2015)
              </li>
              <li>
                <span className="font-semibold">FIRST PUBLISHED:</span> June 23,
                2015
              </li>
              <li>
                <span className="font-semibold">ISBN:</span> 1940811163
              </li>
              <li>
                <span className="font-semibold">LANGUAGE:</span> ENGLISH
              </li>
              <li>
                <span className="font-semibold">PAGES:</span> 678p
              </li>
              <li>
                <span className="font-semibold">GENRE:</span> Fiction, Romance
                Novel
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
            <input className="bg-[#F4F4F4] pl-2 h-[60px] w-full outline-none rounded-xl" type="text" name="" id=""  placeholder="Review"/>
          </form>
        </div>
        <div>
          <ReviewCard
            img={u1}
            name="Williams Smith"
            review="Wow! this is a book you who love to read, very touching , and i can relate to the story."
          ></ReviewCard>
          <ReviewCard
            img={u1}
            name="Williams Smith"
            review="Wow! this is a book you who love to read, very touching , and i can relate to the story."
          ></ReviewCard>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
