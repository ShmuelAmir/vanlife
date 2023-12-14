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
    <ul className="mx-auto flex max-w-xl gap-8 text-gray-500">
      {pages.map((page) => (
        <NavLink
          key={page}
          to={page === indexPage ? "" : page}
          end={page === indexPage}
          className={({ isActive }) =>
            clsx(
              "cursor-pointer capitalize hover:text-black hover:underline",
              isActive && "font-bold text-black underline",
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
