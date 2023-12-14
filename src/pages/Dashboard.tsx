import { Link } from "react-router-dom";

import Star from "../components/icons/Star";
import SmallCardList from "../components/SmallCardList";

function Dashboard() {
  return (
    <div className="pt-8">
      <div className="p-8 bg-[#FFEAD0]  max-w-xl mx-auto">
        <h2 className="font-bold text-2xl">Welcome!</h2>
        <div className="flex justify-between">
          <p className="text-xs">
            Income last <span className="font-bold underline">30 days</span>
          </p>
          <Link to="income" className="text-sm hover:underline">
            Details
          </Link>
        </div>
        <p className="font-bold text-4xl">$2,260</p>
      </div>
      <div className="px-8 py-6 bg-[#FFDDB2] flex justify-between max-w-xl mx-auto items-center">
        <div className="flex gap-4">
          <p className="font-bold">Review score</p>
          <p className="flex gap-1 items-center font-bold text-sm">
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
      <div className="p-8 max-w-xl mx-auto">
        <div className="flex justify-between mb-4 items-center">
          <h3 className="font-bold text-lg">Your listed vans</h3>
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
