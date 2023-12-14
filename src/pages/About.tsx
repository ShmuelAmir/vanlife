function About() {
  return (
    <div>
      <div
        style={{
          height: "25vh",
          backgroundImage:
            "url(https://visit2israel.com/wp-content/uploads/2023/04/tommy-lisbin-xr-y6Ruw7K8-unsplash.webp)",
        }}
        className="bg-center bg-no-repeat"
      />
      <div className="mx-auto max-w-2xl p-10">
        <h2 className="mb-6 text-3xl font-bold">
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
        <div className="mt-16 rounded-md bg-[#FFCC8D] p-5">
          <p className="text-2xl font-bold">
            Your destination is waiting. <br /> Your van is ready.
          </p>
          <button className="mt-4 rounded-md bg-slate-900 px-6 py-3 text-white">
            Explore our vans
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
