import { NavLink } from "react-router-dom";

import clsx from "clsx";

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
              "hover:text-black hover:underline capitalize",
              isActive && "text-black underline"
            );
          }}
        >
          {page}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
