import { Link, To } from "react-router-dom";

const GenreCard = ({route, img, text}) => {
  return <Link to={route}>
    <div className="h-[300px] w-[250px] flex items-center justify-center relative mx-auto">
        <img src={img} className="" alt="" />
        <h2 className="font-bold text-xl top-0 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >{text}</h2>
    </div>
  </Link>;
};

export default GenreCard;
