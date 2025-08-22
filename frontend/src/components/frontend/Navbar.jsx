import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact" },
  ];

  const ref = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(ref.current.scrollTop > 10);
    };
    ref.current.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="overflow-y-scroll scroll-smooth">
      <nav
        className={`fixed top-0 h-16 py-5 left-0 bg-indigo-500 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
          isScrolled
            ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
            : "py-4 md:py-6"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={assets.logo}
            alt="logo"
            className={`h-16 ${isScrolled && "invert opacity-80"}`}
          />
          <span
            className={`text-xl text-white font-bold ${
              isScrolled && "text-gray-700"
            }`}
          >
            SkyLine Build
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-between gap-6">
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className={`group flex flex-col gap-0.5 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.name}
                <div
                  className={`${
                    isScrolled ? "bg-gray-700" : "bg-white "
                  } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
                />
              </Link>
            ))}
          </div>
          <div className="flex ml-10">
            <Link
              to="/admin"
              className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${
                isScrolled ? "text-black" : "text-white"
              } transition-all`}
            >
              Admin
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          {/* <img onClick={() => setIsMenuOpen(!isMenuOpen)} src={assets.logo} alt=""  className="h-12"/> */}
          <IoMdMenu
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`h-8 w-8 cursor-pointer ${isScrolled ? "invert" : ""}`}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed bg-blue-500 top-0 left-0 w-full h-screen flex flex-col md:hidden gap-6 font-medium text-white text-xl transition-all duration-500 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <IoCloseSharp
            className="h-10 w-10 ml-auto mr-5 mt-5"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="flex flex-col items-center gap-4 w-full">
            {navLinks.map((link, i) => (
              <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}

            <button className="border px-4 py-1 text-sm font-light rounded-lg cursor-pointer transition-all">
              Admin
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
