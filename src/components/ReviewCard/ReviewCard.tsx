interface IReview {
  img: string;
  name: string;
  review: string;
}

const ReviewCard = ({ img, name, review }: IReview) => {
  return (
    <div className="flex items-center py-4 px-2 my-4">
      <img src={img} alt="" />
      <div className="ml-4">
        <h2 className="text-semibold">{name}</h2>
        <p className="text-mainText">{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
