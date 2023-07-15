import { Link } from "react-router-dom";

interface IButton {
  path: string;
  content: string;
}

const FilledButton = ({ path, content }: IButton) => {
  return (
    <Link
      className="bg-mainBackground text-white outline-1   py-2 px-6  rounded-md"
      to={path}
    >
      {content}
    </Link>
  );
};

export default FilledButton;
