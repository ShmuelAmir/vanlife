import { Outlet, useLoaderData } from "react-router-dom";

import { Van } from "../../types/Van";
import { getHostVans } from "../../api/getHotsVans";
import Navigation from "../../components/Navigation";

const hostPages = ["dashboard", "vans", "reviews", "income"];

export async function loader() {
  return getHostVans();
}

function Host() {
  const vans = useLoaderData() as Van[];

  return (
    <div className="h-full bg-[#FFF7ED] p-8">
      <Navigation pages={hostPages} indexPage="dashboard" />
      <Outlet context={vans} />
    </div>
  );
}

export default Host;
