import heroV from "../assets/heroV.mp4";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center h-[95vh] overflow-hidden">
      <video
        src={heroV}
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      />
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      <div className="absolute z-20 text-white text-center">
        <h1 className="font-outline text-4xl pb-4 font-semi lg:text-6xl lg:font-bold">
          Products for a better world
        </h1>
        <h1 className="font-pacifico text-4xl pb-16 font-semi lg:text-6xl lg:font-bold">
          Start your journey here
        </h1>
        <button className="bg-white text-black py-2 px-6 rounded-lg">
          Visit Marketplace
        </button>
      </div>
    </div>
  );
};

export default Hero;
