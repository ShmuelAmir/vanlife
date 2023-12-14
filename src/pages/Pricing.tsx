import useVan from "../api/useVan";

function Pricing() {
  const { data: van, isLoading, isError } = useVan();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <p className="pt-12">
      <span className="font-bold text-3xl">${van?.price}</span>
      <span className="text-gray-500 text-xl">/day</span>
    </p>
  );
}

export default Pricing;
