import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Projects", path: "/projects" },
    { name: "Contact Us", path: "/contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <footer className="px-6 mt-20 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
          <div className="flex items-center gap-2">
            <img className="h-24" src={assets.logo} alt="logo" />
            <span className="text-xl font-bold">SkyLine Build</span>
          </div>
          <p className="mt-2 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  className={`group flex flex-col gap-0.5 ${
                    isScrolled
                      ? "text-gray-700"
                      : "text-black hover:font-medium"
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
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-gray-800 mb-5">
              Subscribe to our newsletter
            </h2>
            <div className="text-sm space-y-2">
              <p>
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <div className="flex items-center gap-2 pt-4">
                <input
                  className="border outline-none border-gray-500/30 placeholder-gray-500 focus:ring-2 w-full max-w-64 h-9 rounded px-2"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="bg-blue-600/80 w-24 h-9 text-white rounded">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright {new Date().getFullYear()} © <Link to="/">SkyLine Build</Link>
        . All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
