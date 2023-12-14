import { useLocation, useNavigate } from "react-router-dom";

import useHostVans from "../api/useHotsVans";
import LoadingSpinner from "./LoadingSpinner";

function SmallCardList() {
  const location = useLocation();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useHostVans();

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <p>Something went wrong</p>;

  const isDashboard = location.pathname === "/host";

  return (
    <div className="flex flex-col gap-2">
      {data?.map((van) => (
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
