import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { Van } from "../../types/Van";
import { getVans } from "../../api/getVans";
import Card from "../../components/Card";
import Filters from "../../components/Filters";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const type = searchParams.get("type");

  const vans = (await getVans()) as Van[];

  if (!type) return vans;
  return vans?.filter((van) => van.type === type);
}

function Vans() {
  const vans = useLoaderData() as Van[];

  return (
    <div className="mx-auto max-w-5xl px-7 py-16 md:px-16">
      <h2 className="text-4xl font-bold">Explore our van options</h2>
      <Filters />
      <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-4">
        {vans.map((van) => (
          <Card key={van.id} van={van} />
        ))}
      </div>
    </div>
  );
}

export default Vans;
