import useVansToDisplay from "../api/useVansToDisplay";
import Card from "../components/Card";
import Filters from "../components/Filters";

function Vans() {
  const { data: vansToDisplay, isLoading, isError } = useVansToDisplay();

  let content = null;
  if (isLoading) {
    content = <div className="text-center">Loading...</div>;
  } else if (isError) {
    content = <div className="text-center">Error fetching vans</div>;
  } else {
    content = vansToDisplay?.map((van) => <Card key={van.id} van={van} />);
  }

  return (
    <div className="px-7 py-16 max-w-5xl mx-auto md:px-16">
      <h2 className="text-4xl font-bold">Explore our van options</h2>
      <Filters />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {content}
      </div>
    </div>
  );
}

export default Vans;
