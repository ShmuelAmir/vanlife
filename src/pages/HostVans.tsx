import SmallCardList from "../components/SmallCardList";

function HostVans() {
  return (
    <div>
      <div className="mx-auto max-w-xl pt-8">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-2xl font-bold">Your listed vans</h3>
        </div>
        <SmallCardList />
      </div>
    </div>
  );
}

export default HostVans;
