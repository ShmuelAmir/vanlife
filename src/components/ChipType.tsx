const typeColors = {
  simple: "bg-[#E17654]",
  luxury: "bg-[#161616]",
  rugged: "bg-[#115E59]",
};

function ChipType({ type = "simple" }: { type?: keyof typeof typeColors }) {
  return (
    <div
      className={`py-1 px-4 rounded-md text-white capitalize w-fit mb-3 ${typeColors[type]}`}
    >
      {type}
    </div>
  );
}

export default ChipType;
