import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-image h-full bg-slate-600 bg-cover bg-center p-10 text-white filter">
      <div className="mx-auto max-w-xl">
        <h1 className="mb-8 mt-36 text-5xl font-bold">
          You got the travel plans, we got the travel vans.
        </h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button
          onClick={() => navigate("/vans")}
          className="mt-20 w-full  rounded-md bg-[#FF8C38] p-2"
        >
          Find your van
        </button>
      </div>
    </div>
  );
}

export default Home;
