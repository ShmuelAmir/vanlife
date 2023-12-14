import { useOutletContext } from "react-router-dom";

import { Van } from "../../types/Van";

function Details() {
  const van = useOutletContext() as Van;

  return (
    <div className="pt-6">
      <p className="mt-4 text-sm">
        <span className="font-bold">Name:</span> {van?.name}
      </p>
      <p className="mt-4 text-sm">
        <span className="font-bold">Category:</span>{" "}
        <span className="capitalize">{van?.type}</span>
      </p>
      <p className="mt-4 text-sm">
        <span className="font-bold">Description:</span> {van?.description}
      </p>
      <p className="mt-4 text-sm">
        <span className="font-bold">Visibility:</span> Public
      </p>
    </div>
  );
}

export default Details;
