import { useNavigate } from "react-router-dom";

import { Van } from "../types/Van";
import ChipType from "./ChipType";

function Card({ van }: { van: Van }) {
  const navigate = useNavigate();

  return (
    <div
      className="transition-all hover:scale-95"
      onClick={() => navigate(`/vans/${van.id}`)}
    >
      <img
        className="cursor-pointer rounded-md"
        src={van.imageUrl}
        alt="van picture"
      />
      <div className="flex justify-between">
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-bold">{van.name}</h3>
          <ChipType type={van.type} />
        </div>
        <p className="mt-3 text-right leading-3">
          <span className="font-bold">${van.price}</span> <br />
          <span className="text-xs">/day</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
