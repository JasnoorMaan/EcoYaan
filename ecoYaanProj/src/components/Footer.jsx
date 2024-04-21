const Footer = () => {
  return (
    <div className="bg-black text-white font-outfit mt-12">
      <div className="flex flex-row justify-around align-center flex-wrap py-8">
        <div className="leading-8">
          <h4>About Us</h4>
          <h4>Become a Seller</h4>
          <h4>Careers</h4>
          <h4>Privacy Policy</h4>
          <h4>Terms of Use</h4>
        </div>
        <div className="leading-8">
          <h4>Instagram</h4>
          <h4>Facebook</h4>
          <h4>Linkedin</h4>
        </div>
        <div className="flex flex-wrap flex-col justify-center align-middle py-4 lg:py-2">
          <h2 className="text-xl font-semibold pb-4">
            Subscribe to our newsletter:
          </h2>
          <input type="email" />
          <button className="buttonWhite mt-4">Subscribe</button>
        </div>
      </div>
      <div className=" flex flex-row justify-around align-center py-4">
        <div className="p-2">
          <h4 className="text-xl font-semibold py-2 px-2">
            Registered Address:
          </h4>
          <p className="text-xs lg:text-md px-2">
            1-N-12T-781/1 Sri Krishna Vilasa, Urvastores
            <br /> Ashoknagar(MR), Mangalore
            <br />
            Dakshina Kannada- 575006, Karnataka, India
          </p>
        </div>
        <div className="p-2">
          <h4 className="text-xl font-semibold py-2 px-2">Legal Name:</h4>
          <p className="text-xs lg:text-md px-2">
            Kindkarma E-Retail Private Limited <br /> CIN: U47912KA2023PTC182592
            <br />
            Telephone: +91 9980490777
          </p>
        </div>
      </div>
      <div className="text-center pt-8 pb-2">
        <h2>All Rights Reserved, ecoyaan.</h2>
      </div>
    </div>
  );
};

export default Footer;
