import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

import Avatar from "./icons/Avatar";

const pages = ["host", "about", "vans"];

function Navbar() {
  return (
    <nav className="flex justify-between gap-3 font-bold text-gray-500">
      {pages.map((page) => (
        <NavLink
          key={page}
          to={page}
          className={({ isActive }) => {
            return clsx(
              "capitalize hover:text-black hover:underline",
              isActive && "text-black underline",
            );
          }}
        >
          {page}
        </NavLink>
      ))}
      <Link to="/login" className="text-sm text-gray-500">
        <Avatar />
      </Link>
    </nav>
  );
}

export default Navbar;
