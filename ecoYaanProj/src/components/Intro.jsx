import trust from "../assets/trust.png";
import impact from "../assets/impact.png";
import authentic from "../assets/authentic.png";
import fun from "../assets/fun.png";

const Intro = () => {
  return (
    <div className="py-16 px-8">
      <div className="flex flex-wrap">
        <h1 className="text-6xl font-outfit font-bold lg:text-9xl">
          about ecoyaan.
        </h1>
        <h4 className="py-4 font-outfit text-xl">
          At ecoyaan, we are more than just a platform. Our goal is to build a
          community of eco-conscious people who share a common vision and
          passion for a more sustainable world. We recognize that sustainability
          is a journey (as the Sanskrit word “yaan” suggests).
          <br /> To keep you motivated on this journey, on our platform and our
          social media pages, you can find:
          <br /> Tips and tricks to adopt a more eco-friendly and low-waste
          lifestyle Videos, posts, and quizzes on climate change and
          sustainability.
          <br /> Events and pledges that invite you to adopt a more sustainable
          lifestyle.
        </h4>
      </div>
      <div>
        <h1 className="text-6xl font-outfit font-bold lg:text-9xl">
          Our Values
        </h1>
        <div className="flex flex-wrap flex-row flex-grow justify-evenly align-middle">
          <div>
            <img className="" src={trust} alt="image" />
            <h4>Trust</h4>
            <p className="py-4 font-outfit text-xl">
              We value the trust of our community. We strive to be transparent
              and honest in everything we do, from the content we share today to
              sourcing our products in the future.
            </p>
          </div>
          <div>
            <img src={authentic} alt="image" />
            <h4>Authenticity</h4>
            <p className="py-4 font-outfit text-xl">
              We are genuine in our mission to promote sustainability and
              environmental awareness. An authentic community of eco-conscious
              people can inspire each other on the journey towards
              sustainability.
            </p>
          </div>
          <div>
            <img src={impact} alt="image" />
            <h4>Impact</h4>
            <p className="py-4 font-outfit text-xl">
              We measure our success by our impact on the planet and our
              community. We aim to empower our sellers and customers to make
              responsible choices that benefit their well-being and the
              well-being of others.
            </p>
          </div>
          <div>
            <img src={fun} alt="image" />
            <h4>Fun and engaging Lifestyle</h4>
            <p className="py-4 font-outfit text-xl">
              Moving towards a sustainable lifestyle and the constant news
              around climate change can be stressful. We aim to inject fun and
              creativity into everything we do, from designing our products to
              providing services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
