import clsx from "clsx";
import { useSearchParams } from "react-router-dom";

const buttons = [
  { type: "simple", color: "#E17654" },
  { type: "luxury", color: "#161616" },
  { type: "rugged", color: "#115E59" },
];

function Filters() {
  const [params, setParams] = useSearchParams({ type: "all" });
  const type = params.get("type") || "all";

  return (
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
  );
}

export default Filters;
