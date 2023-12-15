import { Link, Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import LogoutButton from "./LogoutButton";

function Layout() {
  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center justify-between bg-[#FFF7ED] p-4">
        <Link to="/">
          <img
            src="/src/assets/logo.svg"
            alt="vanlife logo"
            className="w-32 transition-all hover:scale-x-105"
          />
        </Link>
        <Navbar />
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <LogoutButton />
      <footer className="bg-[#252525] p-4 text-center text-xs text-[#AAA]">
        Ⓒ 2022 #VANLIFE
      </footer>
    </div>
  );
}

export default Layout;
