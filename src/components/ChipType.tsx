const typeColors = {
  simple: "bg-[#E17654]",
  luxury: "bg-[#161616]",
  rugged: "bg-[#115E59]",
};

function ChipType({ type = "simple" }: { type?: keyof typeof typeColors }) {
  return (
    <div
      className={`mb-3 w-fit rounded-md px-4 py-1 capitalize text-white ${typeColors[type]}`}
    >
      {type}
    </div>
  );
}

export default ChipType;
