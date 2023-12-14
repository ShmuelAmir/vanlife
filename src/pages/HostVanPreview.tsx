import useVan from "../api/useVan";
import ChipType from "../components/ChipType";
import LoadingSpinner from "../components/LoadingSpinner";

function HostVanPreview() {
  const { data: van, isLoading, isError } = useVan();

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <p>Something went wrong</p>;

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
