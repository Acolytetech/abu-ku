"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // get current path

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/" },
    { name: "Contact", href: "/" },
  ];

  return (
    <nav className="bg-yellow-500 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide hover:text-gray-100 transition"
        >
          ABU-KU Agro Farms
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-semibold">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-gray-200 transition ${
                pathname === link.href ? "underline underline-offset-4 font-bold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-yellow-400 text-white font-semibold px-6 py-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block hover:text-gray-200 transition ${
                pathname === link.href ? "underline underline-offset-4 font-bold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
