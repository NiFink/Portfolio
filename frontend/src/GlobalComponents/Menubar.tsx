import { Link, useLocation } from "react-router-dom";

function Menubar() {
  const location = useLocation();

  return (
    <div className="z-10 w-full flex justify-center fixed top-0 left-0 text-2xl pt-4">
      <div className="flex bg-white rounded-xl px-10 shadow-2xl">
        <Link
          to="/"
          className={`mr-1  h-20 w-40 flex justify-center items-center cursor-pointer font-bold hover:underline decoration-2 gap-2 `}
        >
          <i className="bi bi-house-door-fill text-xl "></i>
          Home
        </Link>
        <Link
          to="/aboutme"
          className={`mr-1  h-20 w-40 flex justify-center items-center cursor-pointer font-bold hover:underline decoration-2`}
        >
          About Me
        </Link>
        <Link
          to="/projects"
          className={`mr-1  h-20 w-40 flex justify-center items-center cursor-pointer font-bold hover:underline decoration-2`}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className={` h-20 w-40 flex justify-center items-center cursor-pointer font-bold hover:underline decoration-2`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Menubar;
