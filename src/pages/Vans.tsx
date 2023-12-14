import { useLoaderData, useSearchParams } from "react-router-dom";

import { Van } from "../types/Van";
import getVans from "../api/getVans";
import Card from "../components/Card";
import Filters from "../components/Filters";
import { useMemo } from "react";

export async function loader() {
  return getVans();
}

function Vans() {
  const [params] = useSearchParams();
  const vans = useLoaderData() as Van[];

  const type = params.get("type");

  const vansToDisplay = useMemo(() => {
    if (!type) return vans;
    return vans?.filter((van) => van.type === type);
  }, [type, vans]);

  return (
    <div className="mx-auto max-w-5xl px-7 py-16 md:px-16">
      <h2 className="text-4xl font-bold">Explore our van options</h2>
      <Filters />
      <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-4">
        {vansToDisplay.map((van) => (
          <Card key={van.id} van={van} />
        ))}
      </div>
    </div>
  );
}

export default Vans;
