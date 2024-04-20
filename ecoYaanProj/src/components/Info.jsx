import windmill from "../assets/windmill.jpg";
import fruits from "../assets/fruits.jpg";
import mountain from "../assets/mountain.jpg";

const Info = () => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center mb-8">
        <h1 className="font-outfit text-4xl font-bold p-4 lg:text-8xl ">
          Shop Sustainably
        </h1>
        <h4 className="font-outfit text-md p-2 font-medium lg:text-2xl lg:py-16">
          Shop eco-friendly and socially responsible products which don't
          compromise on style or quality.
        </h4>
      </div>

      <div className="flex flex-row flex-wrap justify-around">
        {/* Windmill Image Div */}
        <div className="p-4 w-full md:w-1/3">
          <div className="relative group">
            <img className="rounded-xl w-full" src={windmill} alt="image" />
            <div className="rounded-xl absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 bg-black bg-opacity-25 group-hover:bg-opacity-75 duration-300 hover:opacity-100">
              <h2 className="text-white font-outfit text-4xl font-bold p-4 lg:text-6xl">
                Carefully Curated Products
              </h2>
              <p className="text-white font-outfit p-4  ">
                Every purchase you make can have a positive impact on the planet
                and its future. Soon, we will be connecting you with
                eco-friendly and sustainable products that are carefully
                selected based on their environmental and social benefits.
              </p>
            </div>
          </div>
        </div>

        {/* Mountain Image Div */}
        <div className="p-4 w-full md:w-1/3">
          <div className="relative group">
            <img className="rounded-xl w-full" src={mountain} alt="image" />
            <div className="rounded-xl absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 bg-black bg-opacity-25 group-hover:bg-opacity-75  duration-300 hover:opacity-100">
              <h2 className="text-white font-outfit text-4xl font-bold p-4 lg:text-6xl">
                Join Our Mission
              </h2>
              <p className="text-white font-outfit p-4 ">
                At Ecoyaan, we are more than just a platform. Our vision is to
                build an eco-conscious community for people and products.
                Consider us your partner for all things sustainable. To keep you
                motivated on the journey, we will provide you with engaging
                information about climate change, the latest updates on climate
                policies and lifestyle tips that you can adopt to reduce your
                impact on the environment.
              </p>
            </div>
          </div>
        </div>

        {/* Fruits Image Div */}
        <div className="p-4 w-full md:w-1/3">
          <div className="relative group">
            <img className="rounded-xl w-full" src={fruits} alt="image" />
            <div className="rounded-xl absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 bg-black bg-opacity-25 group-hover:bg-opacity-75 duration-300 hover:opacity-100">
              <h2 className="text-white font-outfit text-4xl font-bold p-4 lg:text-6xl">
                Become a Seller
              </h2>
              <p className="text-white font-outfit p-4">
                Do you run a business that is committed to sustainability in
                every aspect of your work? Do you want to showcase your products
                to an incredible audience of eco-conscious consumers who care?
                If yes, then you are the perfect fit for our platform. Our
                community appreciates and supports businesses that are
                transparent, ethical, and innovative in their approach to
                sustainability. Contact us today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
