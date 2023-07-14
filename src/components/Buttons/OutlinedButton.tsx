import { Link } from "react-router-dom";

interface IButton {
    path: string;
    content: string
}

const OutlinedButton = ({path, content}: IButton) => {
    return (
        <Link className="outline outline-mainBackground text-mainBackground outline-1   py-2 px-6  rounded-md" to={path}> {content} </Link>
    );
};

export default OutlinedButton;