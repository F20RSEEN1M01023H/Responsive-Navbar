import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold font-mono ">My Logo</h1>

        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>

        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-6 md:hidden">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
