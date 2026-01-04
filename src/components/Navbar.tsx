"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Awards", href: "#awards" },
  { name: "Freelance", href: "#client-work" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-3 bg-[#e8dcc0] backdrop-blur-sm px-4 py-2.5 border-4 border-[#3d2817] shadow-lg">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-serif text-sm text-[#3d2817] hover:font-bold transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3d2817] group-hover:w-full transition-all"></span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[95%]">
        <div className="bg-[#e8dcc0] backdrop-blur-sm px-4 py-3 border-2 border-[#3d2817] shadow-lg">
          <div className="flex items-center justify-between">
            <span className="cinematic-font text-sm text-[#3d2817] tracking-wider">
              SAI PRAKASH REDDY
            </span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-[#3d2817] transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-[#3d2817] transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-[#3d2817] transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#e8dcc0] border-2 border-[#3d2817] shadow-lg">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-sm text-[#3d2817] px-4 py-3 border-b border-[#3d2817] last:border-b-0 hover:bg-[#c4a574] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
