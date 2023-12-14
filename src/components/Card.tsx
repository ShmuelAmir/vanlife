import { useNavigate } from "react-router-dom";

import { Van } from "../types/Van";
import ChipType from "./ChipType";

function Card({ van }: { van: Van }) {
  const navigate = useNavigate();

  return (
    <div>
      <img
        onClick={() => navigate(`/vans/${van.id}`)}
        className="rounded-md cursor-pointer hover:scale-95 transition-all"
        src={van.imageUrl}
        alt="van picture"
      />
      <div className="flex justify-between">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-xl">{van.name}</h3>
          <ChipType type={van.type} />
        </div>
        <p className="text-right leading-3 mt-3">
          <span className="font-bold">${van.price}</span> <br />
          <span className="text-xs">/day</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
