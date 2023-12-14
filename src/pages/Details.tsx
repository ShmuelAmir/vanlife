import useVan from "../api/useVan";

function Details() {
  const { data: van, isLoading, isError } = useVan();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <div className="pt-6">
      <p className="text-sm mt-4">
        <span className="font-bold">Name:</span> {van?.name}
      </p>
      <p className="text-sm mt-4">
        <span className="font-bold">Category:</span>{" "}
        <span className="capitalize">{van?.type}</span>
      </p>
      <p className="text-sm mt-4">
        <span className="font-bold">Description:</span> {van?.description}
      </p>
      <p className="text-sm mt-4">
        <span className="font-bold">Visibility:</span> Public
      </p>
    </div>
  );
}

export default Details;
