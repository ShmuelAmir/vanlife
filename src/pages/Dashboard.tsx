import { Link } from "react-router-dom";

import Star from "../components/icons/Star";
import SmallCardList from "../components/SmallCardList";

function Dashboard() {
  return (
    <div className="pt-8">
      <div className="mx-auto max-w-xl  bg-[#FFEAD0] p-8">
        <h2 className="text-2xl font-bold">Welcome!</h2>
        <div className="flex justify-between">
          <p className="text-xs">
            Income last <span className="font-bold underline">30 days</span>
          </p>
          <Link to="income" className="text-sm hover:underline">
            Details
          </Link>
        </div>
        <p className="text-4xl font-bold">$2,260</p>
      </div>
      <div className="mx-auto flex max-w-xl items-center justify-between bg-[#FFDDB2] px-8 py-6">
        <div className="flex gap-4">
          <p className="font-bold">Review score</p>
          <p className="flex items-center gap-1 text-sm font-bold">
            <Star />
            <span>
              5.0<span className="text-gray-400">/5</span>
            </span>
          </p>
        </div>
        <Link to="reviews" className="text-sm hover:underline">
          Details
        </Link>
      </div>
      <div className="mx-auto max-w-xl p-8">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold">Your listed vans</h3>
          <Link to="vans" className="text-sm hover:underline">
            View all
          </Link>
        </div>
        <SmallCardList />
      </div>
    </div>
  );
}

export default Dashboard;
