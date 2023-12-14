import useVan from "../api/useVan";
import LoadingSpinner from "../components/LoadingSpinner";

function Details() {
  const { data: van, isLoading, isError } = useVan();

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <p>Something went wrong</p>;

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
