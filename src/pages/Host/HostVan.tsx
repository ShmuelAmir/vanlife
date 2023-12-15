import { LoaderFunctionArgs, Outlet, useLoaderData } from "react-router-dom";

import { Van } from "../../types/Van";
import { getHostVans } from "../../api/getHotsVans";
import Navigation from "../../components/Navigation";
import GoBack from "../../components/GoBack";
import HostVanPreview from "./HostVanPreview";

const vanPages = ["details", "pricing", "photos"];

export function loader({ params }: LoaderFunctionArgs) {
  return getHostVans(params.id);
}

function HostVan() {
  const van = useLoaderData() as Van;

  return (
    <div className="mx-auto max-w-xl pt-8">
      <GoBack pathToNavigate=".." />
      <div className="px-5">
        <HostVanPreview van={van} />
        <Navigation pages={vanPages} indexPage="details" />
        <Outlet context={van} />
      </div>
    </div>
  );
}

export default HostVan;
