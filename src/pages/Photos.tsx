import useVan from "../api/useVan";

function Photos() {
  const { data: van, isLoading, isError } = useVan();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <p className="pt-12">
      <img src={van?.imageUrl} alt="" className="h-32" />
    </p>
  );
}

export default Photos;
