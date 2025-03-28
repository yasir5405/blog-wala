
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <h1 className="text-lg md:text-xl font-semibold flex gap-2 items-center">
        <img
          src="https://stealthwriter.ai/logo-icon.svg"
          alt=""
          className="h-8 w-8 invert brightness-0"
        />
        BlogWala
      </h1>
    </Link>
  );
};

export default Logo;
