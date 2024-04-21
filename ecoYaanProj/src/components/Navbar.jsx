import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `fixed top-0 w-full z-50 ${
    isScrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"
  }`;

  const closeMenu = () => isMenuOpen(false);

  return (
    <nav className={navbarClasses}>
      <div className="flex justify-between items-center py-4 px-4">
        <h2 className="font-outfit text-3xl font-bold">
          <Link to="/" onClick={closeMenu}>
            ecoyaan.
          </Link>
        </h2>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="hidden md:flex justify-between items-center space-x-8">
          <h2 className="py-2 font-outfit text-lg font-semibold">Shop</h2>
          <h2 className="py-2 font-outfit text-lg font-semibold">
            Become a Seller
          </h2>
          <h2 className="py-2 font-outfit text-lg font-semibold">Careers</h2>
          <h2 className="py-2 font-outfit text-lg font-semibold">
            <Link to="/aboutus" onClick={closeMenu}>
              About us
            </Link>
          </h2>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center">
          <h2 className="py-2 font-outfit text-lg font-semibold">Shop</h2>
          <h2 className="py-2 font-outfit text-lg font-semibold">
            Become a Seller
          </h2>
          <h2 className="py-2 font-outfit text-lg font-semibold">Careers</h2>
          <h2 className="py-2 font-outfit text-lg font-semibold">
            <Link to="/aboutus" onClick={closeMenu}>
              About us
            </Link>
          </h2>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
