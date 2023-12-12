export default function About() {
  return (
    <div>
      <div
        style={{
          height: "25vh",
          backgroundImage: "url(/src/assets/about.png)",
        }}
        className="bg-center bg-no-repeat"
      />
      <div className="p-10 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
          <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="bg-[#FFCC8D] rounded-md p-5 mt-16">
          <p className="font-bold text-2xl">
            Your destination is waiting. <br /> Your van is ready.
          </p>
          <button className="bg-slate-900 text-white rounded-md py-3 px-6 mt-4">
            Explore our vans
          </button>
        </div>
      </div>
    </div>
  );
}
