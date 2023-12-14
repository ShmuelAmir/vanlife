import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { Van } from "../types/Van";

function SmallCardList() {
  const vans = useOutletContext() as Van[];

  const location = useLocation();
  const navigate = useNavigate();

  const isDashboard = location.pathname === "/host";

  return (
    <div className="flex flex-col gap-2">
      {vans?.map((van) => (
        <div
          key={van.id}
          onClick={() => navigate(`${isDashboard ? "vans/" : ""}${van.id}`)}
          className="flex cursor-pointer items-center justify-between rounded-md bg-white p-4 hover:bg-gray-100"
        >
          <div className="flex items-center gap-3">
            <img
              className="h-16 rounded-md"
              src={van.imageUrl}
              alt={`${van.name} photo`}
            />
            <div>
              <p className="font-bold">{van.name}</p>
              <p className="text-sm text-gray-500">${van.price}/day</p>
            </div>
          </div>
          {isDashboard && <p className="text-sm">Edit</p>}
        </div>
      ))}
    </div>
  );
}

export default SmallCardList;
