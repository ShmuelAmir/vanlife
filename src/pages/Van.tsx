import clsx from "clsx";

import useVan from "../api/useVan";

function VanPage() {
  const { data: van, isLoading, isError } = useVan();

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (isError) return <div className="text-center">Error fetching van</div>;

  return (
    <div className="px-7 py-14 mx-auto max-w-sm md:max-w-4xl flex flex-col md:flex-row md:gap-16">
      <img
        src={van?.imageUrl}
        alt={van?.name}
        className="rounded-md max-h-96"
      />
      <div>
        <div
          className={clsx(
            "py-1 px-4 rounded-md text-white capitalize w-fit mt-10 mb-4",
            van?.type === "simple" && `bg-[#E17654]`,
            van?.type === "luxury" && `bg-[#161616]`,
            van?.type === "rugged" && `bg-[#115E59]`
          )}
        >
          {van?.type}
        </div>
        <div className="font-bold text-2xl">{van?.name}</div>
        <div className="my-2">
          <span className="font-bold text-xl">${van?.price}</span>/day
        </div>
        <div className="text-slate-500">{van?.description}</div>
        <button className="bg-[#E17654] w-full rounded-md text-white py-2 mt-6 hover:opacity-80">
          Rent this van
        </button>
      </div>
    </div>
  );
}

export default VanPage;
