import Promos from "../assets/promo.jpg";

const Promo = () => {
  return (
    <div className="relative flex items-center justify-center h-[95vh] overflow-hidden mt-12 mb-12">
      <img
        src={Promos}
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      />
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      <div className="absolute z-20 text-white text-center">
        <h1 className="font-pacifico text-4xl pb-4 font-semi lg:text-6xl">
          Presenting Shores
        </h1>
        <h1 className="font-outline text-4xl pb-16 font-semi lg:font-semibold">
          Shoes made for comfort, adventure and nature
        </h1>
        <button className="buttonWhite">Shop</button>
      </div>
    </div>
  );
};

export default Promo;
