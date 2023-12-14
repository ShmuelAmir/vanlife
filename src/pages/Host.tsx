import { Outlet } from "react-router-dom";

import Navigation from "../components/Navigation";

const hostPages = ["dashboard", "vans", "reviews", "income"];

function Host() {
  return (
    <div className="bg-[#FFF7ED] h-full p-8">
      <Navigation pages={hostPages} indexPage="dashboard" />
      <Outlet />
    </div>
  );
}

export default Host;
