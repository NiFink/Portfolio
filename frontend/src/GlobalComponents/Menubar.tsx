import { Link } from "react-router-dom";

function Menubar() {

  return (
    <div className="z-10 w-full flex justify-center fixed top-0 left-0 text-2xl pt-4">
      <div className="flex bg-white rounded-full px-6 shadow-2xl gap-8 py-4">
        <Link
          to="/"
          className={`px-5 py-2 rounded-full flex justify-center items-center cursor-pointer font-bold hover:underline decoration-2 gap-2 hover:bg-indigo-200 `}
        >
          <i className="bi bi-house-door-fill text-xl "></i>
          Home
        </Link>
        <Link
          to="/aboutme"
          className={`px-5 rounded-full flex justify-center items-center cursor-pointer font-bold hover:underline decoration-2 hover:bg-indigo-200 `}
        >
          About Me
        </Link>
        <Link
          to="/projects"
          className={`px-5 rounded-full  flex justify-center items-center cursor-pointer font-bold hover:underline decoration-2 hover:bg-indigo-200 `}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className={`px-5 rounded-full  flex justify-center items-center cursor-pointer font-bold hover:underline decoration-2 hover:bg-indigo-200 `}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Menubar;
