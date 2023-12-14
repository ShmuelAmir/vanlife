import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-image h-full bg-cover bg-center text-white p-10 filter bg-slate-600">
      <div className="max-w-xl mx-auto">
        <h1 className="text-5xl font-bold mt-36 mb-8">
          You got the travel plans, we got the travel vans.
        </h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button
          onClick={() => navigate("/vans")}
          className="bg-[#FF8C38] w-full  p-2 rounded-md mt-20"
        >
          Find your van
        </button>
      </div>
    </div>
  );
}

export default Home;
