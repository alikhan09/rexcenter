import { useState } from "react";
import logo from "../assets/rex.png";

export default function Navbar({ setPage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-purple-700 text-white p-4 shadow-lg border-b-4 border-yellow-400">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="RexCenter Logo" className="h-12 w-12 object-cover rounded-full" />
          <div className="text-2xl font-extrabold tracking-widest text-yellow-300">
            REX<span className="text-white">CENTER</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <div className={`md:flex space-x-6 absolute md:static bg-blue-700 md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 px-6 py-4 md:p-0 transition-all ${isOpen ? "block" : "hidden"}`}>
          <button onClick={() => setPage("home")} className="block md:inline-block text-lg font-semibold hover:text-yellow-300 transition">Home</button>
          <button onClick={() => setPage("about")} className="block md:inline-block text-lg font-semibold hover:text-yellow-300 transition">About</button>
          <button onClick={() => setPage("services")} className="block md:inline-block text-lg font-semibold hover:text-yellow-300 transition">Services</button>
          <button onClick={() => setPage("contact")} className="block md:inline-block text-lg font-semibold hover:text-yellow-300 transition">Contact</button>
        </div>
      </div>
    </nav>
  );
}
