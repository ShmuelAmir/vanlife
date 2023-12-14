import { NavLink } from "react-router-dom";
import clsx from "clsx";

function Navigation({
  pages,
  indexPage,
}: {
  pages: string[];
  indexPage: string;
}) {
  return (
    <ul className="flex gap-8 text-gray-500 max-w-xl mx-auto">
      {pages.map((page) => (
        <NavLink
          key={page}
          to={page === indexPage ? "" : page}
          end={page === indexPage}
          className={({ isActive }) =>
            clsx(
              "hover:text-black cursor-pointer hover:underline capitalize",
              isActive && "text-black underline font-bold"
            )
          }
        >
          {page}
        </NavLink>
      ))}
    </ul>
  );
}

export default Navigation;
