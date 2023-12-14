import { useOutletContext } from "react-router-dom";

import { Van } from "../types/Van";

function Photos() {
  const van = useOutletContext() as Van;

  return (
    <p className="pt-12">
      <img src={van?.imageUrl} alt={`${van.name} photo`} className="h-32" />
    </p>
  );
}

export default Photos;
