import trust from "../assets/trust.png";
import impact from "../assets/impact.png";
import authentic from "../assets/authentic.png";
import fun from "../assets/fun.png";
import aboutbg from "../assets/aboutbg.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Intro = () => {
  return (
    <div className="">
      <div className="relative flex items-center justify-center h-[50vh] overflow-hidden mb-12">
        <img
          src={aboutbg}
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        />
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

        <div className="absolute bottom-1 z-20 text-white text-center">
          <h1 className="text-6xl font-outfit font-bold lg:text-9xl">
            about ecoyaan.
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap">
        <h4 className=" font-outfit text-xl py-16 px-8">
          At ecoyaan, we are more than just a platform. Our goal is to build a
          community of eco-conscious people who share a common vision and
          passion for a more sustainable world. We recognize that sustainability
          is a journey (as the Sanskrit word “yaan” suggests). To keep you
          motivated on this journey, on our platform and our social media pages,
          you can find:
          <br /> Tips and tricks to adopt a more eco-friendly and low-waste
          lifestyle Videos, posts, and quizzes on climate change and
          sustainability.
          <br /> Events and pledges that invite you to adopt a more sustainable
          lifestyle.
          <br />
          <br />
          We started Ecoyaan after watching an episode of “Our Planet II”, where
          we saw the devastating impact of plastic pollution and climate change
          on the albatross birds. That moment ignited our mission. Our research
          suggests that many Indians understand global warming, yet access to
          sustainable practices and products remains limited. We also noticed
          that there is a lack of support for eco-friendly businesses. We
          created Ecoyaan to connect consumers, businesses, and sustainability
          experts. We want to make it easy and convenient for people to access
          eco-friendly products and services, learn and share best practices,
          and support sustainability initiatives. As founders, we are not
          perfect, but we are passionate. We believe that every small step
          matters. Join us and be a part of the Ecoyaan community — together,
          we’ll make a difference.
        </h4>
      </div>

      <div className="py-12 flex flex-wrap justify-center items-center px-4">
        <h1 className="text-6xl  font-outfit font-bold lg:text-9xl">
          Our Values
        </h1>

        <div className="flex flex-wrap justify-between py-8">
          <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 shadow-none border-none">
            <CardContent className="flex flex-col items-center justify-center">
              <img
                className="object-contain h-20 sm:h-32 mb-4"
                src={trust}
                alt="Trust"
              />
              <h1 className="font-outfit text-3xl font-semibold py-4">Trust</h1>
              <p className="py-4 font-outfit text-xl">
                We value the trust of our community. We strive to be transparent
                and honest in everything we do, from the content we share today
                to sourcing our products in the future.
              </p>
            </CardContent>
          </Card>

          <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 shadow-none border-none">
            <CardContent className="flex flex-col items-center justify-center">
              <img
                className="object-contain h-20 sm:h-32 mb-4"
                src={authentic}
                alt="Authenticity"
              />
              <h1 className="font-outfit text-3xl font-semibold py-4">
                Authenticity
              </h1>
              <p className="py-4 font-outfit text-xl">
                We are genuine in our mission to promote sustainability and
                environmental awareness. An authentic community of eco-conscious
                people can inspire each other on the journey towards
                sustainability.
              </p>
            </CardContent>
          </Card>

          <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 shadow-none border-none">
            <CardContent className="flex flex-col items-center justify-center">
              <img
                className="object-contain h-20 sm:h-32 mb-4"
                src={impact}
                alt="Impact"
              />
              <h1 className="font-outfit text-3xl font-semibold py-4">
                Impact
              </h1>
              <p className="py-4 font-outfit text-xl">
                We measure our success by our impact on the planet and our
                community. We aim to empower our sellers and customers to make
                responsible choices that benefit their well-being and the
                well-being of others.
              </p>
            </CardContent>
          </Card>

          <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 shadow-none border-none">
            <CardContent className="flex flex-col items-center justify-center">
              <img
                className="object-contain h-20 sm:h-32 mb-4"
                src={fun}
                alt="Fun and engaging Lifestyle"
              />
              <h1 className="font-outfit text-3xl font-semibold py-4">
                Fun and Engaging
              </h1>
              <p className="py-4 font-outfit text-xl">
                Moving towards a sustainable lifestyle and the constant news
                around climate change can be stressful. We aim to inject fun and
                creativity into everything we do, from designing our products to
                providing services.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Intro;
