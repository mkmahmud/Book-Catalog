import { Link } from "react-router-dom";
import book1 from "../../assets/books/book1.png";
import OutlinedButton from "../Buttons/OutlinedButton";

const BookCard = () => {
  return (
    <div className=" p-2">
      <div className="p-2 border border-4">
        <img className="block mx-auto" src={book1} alt="" />
      </div>
      <div className="my-2">
        <h2 className="text-titleColor text-2xl font-semibold">The Secret Window</h2>
        <div className="flex justify-between items-center">
          <h5 className="text-xl py-2">Sylve Fox</h5>
          <button>
            <i className="fa-sharp fa-solid fa-heart text-mainBackground"></i>
          </button>
        </div>
        <p className="text-mainText">
          Whoever said that time heals all wounds.... lied. A decade after the
          death of her husband, Nari Yoon still mourns. On the ten-year
          anniversary of the worst day of herlife.....
          <Link to="/details/:id" className="text-mainBackground">read more</Link>
        </p>
        <div className="py-2">
          <i className="fa-solid fa-star text-ratingColor"></i>
          <i className="fa-solid fa-star text-ratingColor"></i>
          <i className="fa-solid fa-star text-ratingColor"></i>
          <i className="fa-solid fa-star text-ratingColor"></i>
          <i className="fa-solid fa-star text-ratingColor"></i>
        </div>
        <div className="my-4">
        <OutlinedButton path="details/:id" content='Add to Cart'></OutlinedButton>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
