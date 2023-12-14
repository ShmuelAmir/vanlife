import { useLoaderData, useLocation } from "react-router-dom";
import clsx from "clsx";

import { Van } from "../types/Van";
import getVan from "../api/getVan";
import GoBack from "../components/GoBack";

export function loader({ params }: { params: { id: string } }) {
  return getVan(params.id);
}

function VanPage() {
  const location = useLocation();

  const van = useLoaderData() as Van;

  const search = location.state?.search || "";

  return (
    <div className="mx-auto max-w-sm px-7 py-14 md:max-w-4xl">
      <GoBack pathToNavigate={`..${search}`} />
      <div className="flex flex-col md:flex-row md:gap-16">
        <img
          src={van?.imageUrl}
          alt={van?.name}
          className="max-h-96 rounded-md"
        />
        <div>
          <div
            className={clsx(
              "mb-4 mt-10 w-fit rounded-md px-4 py-1 capitalize text-white",
              van?.type === "simple" && `bg-[#E17654]`,
              van?.type === "luxury" && `bg-[#161616]`,
              van?.type === "rugged" && `bg-[#115E59]`,
            )}
          >
            {van?.type}
          </div>
          <div className="text-2xl font-bold">{van?.name}</div>
          <div className="my-2">
            <span className="text-xl font-bold">${van?.price}</span>/day
          </div>
          <div className="text-slate-500">{van?.description}</div>
          <button className="mt-6 w-full rounded-md bg-[#E17654] py-2 text-white hover:opacity-80">
            Rent this van
          </button>
        </div>
      </div>
    </div>
  );
}

export default VanPage;
