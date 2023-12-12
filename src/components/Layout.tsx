import { Link, Outlet } from "react-router-dom";

const pages = ["about", "vans"];

export default function Layout() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex justify-between items-center p-4 bg-slate-200">
        <Link to="/">
          <img
            src="/src/assets/logo.png"
            alt="vanlife logo"
            className="w-32 hover:scale-x-105 transition-all"
          />
        </Link>
        <nav className="flex justify-between gap-3 font-bold">
          {pages.map((page) => (
            <Link
              to={`/${page}`}
              className="text-gray-500 hover:text-black hover:underline capitalize"
              key={page}
            >
              {page}
            </Link>
          ))}
        </nav>
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-slate-300 p-4 text-center text-xs">
        Ⓒ 2022 #VANLIFE
      </footer>
    </div>
  );
}
