import { Link, Outlet } from "react-router-dom";

import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex justify-between items-center p-4 bg-[#FFF7ED]">
        <Link to="/">
          <img
            src="/src/assets/logo.svg"
            alt="vanlife logo"
            className="w-32 hover:scale-x-105 transition-all"
          />
        </Link>
        <Navbar />
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <footer className="bg-[#252525] text-[#AAA] p-4 text-center text-xs">
        Ⓒ 2022 #VANLIFE
      </footer>
    </div>
  );
}

export default Layout;
