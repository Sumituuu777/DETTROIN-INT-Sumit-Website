import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo from "../assets/logo.png";

const navLinks = [
  "About Us",
  "Academics",
  "Admissions",
  "Achievements",
  "Parents Corner",
  "Students Corner",
  "Alumni",
  "Career",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-green-100 shadow-sm">
        <div className="max-w-375 mx-auto h-20 px-5 lg:px-10 flex items-center justify-between">

          {/* Logo */}

          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src={logo}
              alt="The Kalyani School"
              className="w-14"
            />

            <div>
              <h1 className="text-2xl font-bold text-[#0B7A4A]">
                The Kalyani School
              </h1>

              <p className="text-xs text-gray-500 tracking-widest uppercase">
                Learn • Grow • Empower
              </p>
            </div>
          </div>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
            {navLinks.map((item) => (
              <li
                key={item}
                className="relative cursor-pointer transition hover:text-[#0B7A4A] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#A8D53B] after:transition-all hover:after:w-full"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-4xl text-[#0B7A4A]"
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 bg-black/40 z-60 transition ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 right-0 h-screen w-75 bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b">
            <img src={logo} className="w-12" />

            <button
              onClick={() => setOpen(false)}
              className="text-3xl text-[#0B7A4A]"
            >
              <HiOutlineX />
            </button>
          </div>

          <ul className="flex flex-col p-5">
            {navLinks.map((item) => (
              <li
                key={item}
                className="py-4 border-b border-gray-100 text-lg font-medium text-gray-700 hover:text-[#0B7A4A] cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}