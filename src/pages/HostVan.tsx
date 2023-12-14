import { Outlet, useLoaderData } from "react-router-dom";

import { Van } from "../types/Van";
import Navigation from "../components/Navigation";
import GoBack from "../components/GoBack";
import HostVanPreview from "./HostVanPreview";

const vanPages = ["details", "pricing", "photos"];

function HostVan() {
  const van = useLoaderData() as Van;

  return (
    <div className="mx-auto max-w-xl pt-8">
      <GoBack pathToNavigate=".." />
      <div className="px-5">
        <HostVanPreview />
        <Navigation pages={vanPages} indexPage="details" />
        <Outlet context={van} />
      </div>
    </div>
  );
}

export default HostVan;
