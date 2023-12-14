import { useNavigate } from "react-router-dom";
import Arrow from "./icons/Arrow";

function GoBack() {
  const navigate = useNavigate();
  
  return (
    <div
      onClick={() => navigate(-1)}
      className="mb-8 flex cursor-pointer items-center gap-2 text-sm underline transition-transform hover:-translate-x-0.5"
    >
      <Arrow />
      <span>Back to vans</span>
    </div>
  );
}

export default GoBack;
