import { Link } from "react-router-dom";

import Arrow from "./icons/Arrow";

function GoBack({ pathToNavigate }: { pathToNavigate: string }) {
  return (
    <Link
      to={pathToNavigate}
      relative="path"
      className="mb-8 flex cursor-pointer items-center gap-2 text-sm underline transition-transform hover:-translate-x-0.5"
    >
      <Arrow />
      <span>Back to vans</span>
    </Link>
  );
}

export default GoBack;
