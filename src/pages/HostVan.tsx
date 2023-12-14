import { Link, Outlet } from "react-router-dom";

import Arrow from "../components/icons/Arrow";
import Navigation from "../components/Navigation";
import HostVanPreview from "./HostVanPreview";

const vanPages = ["details", "pricing", "photos"];

function HostVan() {
  return (
    <div className="pt-8 max-w-xl mx-auto">
      <Link
        to=".."
        relative="path"
        className="flex items-center gap-2 text-sm underline hover:-translate-x-0.5 transition-transform"
      >
        <Arrow />
        <span>Back to vans</span>
      </Link>
      <div className="px-5">
        <HostVanPreview />
        <Navigation pages={vanPages} indexPage="details" />

        <Outlet />
      </div>
    </div>
  );
}

export default HostVan;
