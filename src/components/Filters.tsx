import { useSearchParams } from "react-router-dom";
import clsx from "clsx";

const buttons = [
  { type: "simple", color: "#E17654" },
  { type: "luxury", color: "#161616" },
  { type: "rugged", color: "#115E59" },
];

function Filters() {
  const [params, setParams] = useSearchParams();
  const type = params.get("type");

  return (
    <div className="mb-12 mt-5 flex items-center justify-between">
      <div className="flex gap-5">
        {buttons.map((button) => (
          <button
            key={button.type}
            onClick={() => setParams({ type: button.type })}
            className={clsx(
              `rounded-md px-6 py-1 capitalize hover:opacity-80`,
              type === button.type
                ? `bg-[${button.color}] text-white`
                : "bg-slate-300 text-black",
            )}
          >
            {button.type}
          </button>
        ))}
      </div>
      {type && (
        <span
          className="cursor-pointer text-slate-500 underline hover:text-slate-700"
          onClick={() => setParams()}
        >
          Clear filters
        </span>
      )}
    </div>
  );
}

export default Filters;
