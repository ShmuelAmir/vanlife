import SmallCardList from "../components/SmallCardList";

function HostVans() {
  return (
    <div>
      <div className="pt-8 max-w-xl mx-auto">
        <div className="flex justify-between mb-4 items-center">
          <h3 className="font-bold text-2xl">Your listed vans</h3>
        </div>
        <SmallCardList />
      </div>
    </div>
  );
}

export default HostVans;
