import useVan from "../api/useVan";
import LoadingSpinner from "../components/LoadingSpinner";

function Pricing() {
  const { data: van, isLoading, isError } = useVan();

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <p>Something went wrong</p>;

  return (
    <p className="pt-12">
      <span className="text-3xl font-bold">${van?.price}</span>
      <span className="text-xl text-gray-500">/day</span>
    </p>
  );
}

export default Pricing;
