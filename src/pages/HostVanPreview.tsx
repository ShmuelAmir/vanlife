import { useLoaderData } from "react-router-dom";

import { Van } from "../types/Van";
import ChipType from "../components/ChipType";

function HostVanPreview() {
  const van = useLoaderData() as Van;

  return (
    <div className="mb-5 mt-16 flex items-center gap-5">
      <img src={van?.imageUrl} alt="" className="h-40" />
      <div>
        <ChipType type={van?.type} />
        <p className="text-2xl font-bold">{van?.name}</p>
        <p>
          <span className="font-bold">${van?.price}</span>
          <span className="text-gray-500">/day</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default HostVanPreview;
