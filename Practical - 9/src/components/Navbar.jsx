import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">My College</h1>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "text-indigo-600 font-semibold" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-indigo-600 font-semibold" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? "text-indigo-600 font-semibold" : ""
            }
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-indigo-600 font-semibold" : ""
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
