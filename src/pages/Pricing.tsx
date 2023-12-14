import { useOutletContext } from "react-router-dom";

import { Van } from "../types/Van";

function Pricing() {
  const van = useOutletContext() as Van;

  return (
    <p className="pt-12">
      <span className="text-3xl font-bold">${van?.price}</span>
      <span className="text-xl text-gray-500">/day</span>
    </p>
  );
}

export default Pricing;
