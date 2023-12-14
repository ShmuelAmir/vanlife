import useVan from "../api/useVan";
import ChipType from "../components/ChipType";

function HostVanPreview() {
  const { data: van, isLoading, isError } = useVan();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <div className="flex items-center gap-5 mt-16 mb-5">
      <img src={van?.imageUrl} alt="" className="h-40" />
      <div>
        <ChipType type={van?.type} />
        <p className="font-bold text-2xl">{van?.name}</p>
        <p>
          <span className="font-bold">${van?.price}</span>
          <span className="text-gray-500">/day</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default HostVanPreview;
