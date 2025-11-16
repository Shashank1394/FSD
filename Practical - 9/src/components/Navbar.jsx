import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <h1 className="text-2xl font-bold">My College</h1>
        <ul className="flex space-x-6 text-lg">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `hover:text-yellow-300 transition ${
                  isActive ? "text-yellow-300 font-semibold" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-yellow-300 ${
                  isActive ? "text-yellow-300 font-semibold" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `hover:text-yellow-300 ${
                  isActive ? "text-yellow-300 font-semibold" : ""
                }`
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-yellow-300 ${
                  isActive ? "text-yellow-300 font-semibold" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
