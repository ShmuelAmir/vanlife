import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";

import { Van } from "../types/Van";
import Card from "../components/Card";

const buttons = [
  { type: "simple", color: "#E17654" },
  { type: "luxury", color: "#161616" },
  { type: "rugged", color: "#115E59" },
];

export default function Vans() {
  const [params, setParams] = useSearchParams({ type: "all" });

  const {
    data: vans,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["vans"],
    queryFn: () =>
      fetch("/api/vans")
        .then((res) => res.json())
        .then((data) => data.vans) as Promise<Van[]>,
  });

  const type = params.get("type") || "all";

  const vansToDisplay = useMemo(() => {
    if (type === "all") return vans;
    return vans?.filter((van) => van.type === type);
  }, [type, vans]);

  let content = null;
  if (isLoading) {
    content = <div className="text-center">Loading...</div>;
  } else if (isError) {
    content = <div className="text-center">Error fetching vans</div>;
  } else {
    content = vansToDisplay?.map((van) => <Card key={van.id} van={van} />);
  }

  return (
    <div className="px-7 py-16 max-w-5xl mx-auto md:px-16">
      <h2 className="text-4xl font-bold">Explore our van options</h2>
      <div className="flex justify-between items-center mt-5 mb-12">
        <div className="flex gap-5">
          {buttons.map((button) => (
            <button
              key={button.type}
              onClick={() => setParams({ type: button.type })}
              className={clsx(
                "py-1 px-6 rounded-md hover:opacity-80 capitalize",
                type === button.type
                  ? `bg-[${button.color}] text-white`
                  : "bg-slate-300 text-black"
              )}
            >
              {button.type}
            </button>
          ))}
        </div>
        <span
          className="text-slate-500 underline cursor-pointer hover:text-slate-700"
          onClick={() => setParams({ type: "all" })}
        >
          Clear filters
        </span>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {content}
      </div>
    </div>
  );
}
