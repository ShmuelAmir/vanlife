import { Outlet } from "react-router-dom";

import Navigation from "../components/Navigation";
import HostVanPreview from "./HostVanPreview";
import GoBack from "../components/GoBack";

const vanPages = ["details", "pricing", "photos"];

function HostVan() {
  return (
    <div className="mx-auto max-w-xl pt-8">
      <GoBack />
      <div className="px-5">
        <HostVanPreview />
        <Navigation pages={vanPages} indexPage="details" />
        <Outlet />
      </div>
    </div>
  );
}

export default HostVan;
