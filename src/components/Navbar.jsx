import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className=" text-white font-medium bg-slate-900 flex justify-between px-6 py-4">
        <h1 className="text-3xl font-bold font-mono">My Logo</h1>

        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="#" className="hover:text-amber-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-400">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-400">
              Contact Us
            </a>
          </li>
        </ul>
        <button
          className="md:hidden text-4xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
        {isOpen && (
          <ul className="absolute top-18 left-0 w-full text-center space-y-4 py-3 bg-slate-900/80">
            <li>
              <a href="#" className="hover:text-amber-400 ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amber-400">
                Contact Us
              </a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
