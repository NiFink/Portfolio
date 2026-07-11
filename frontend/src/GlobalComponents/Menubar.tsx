"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { to: "/", label: "Home" },
  { to: "/aboutme", label: "About Me" },
  { to: "/projects", label: "Projects" },
];

function Menubar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (to: string) =>
    pathname === to || pathname === `${to}/`;

  return (
    <nav className="z-50 w-full flex justify-center fixed top-0 left-0 pt-3 px-3 md:pt-4">
      {/* Desktop */}
      <div className="hidden md:flex items-center bg-white/90 backdrop-blur rounded-full pl-6 pr-2 shadow-2xl gap-2 lg:gap-4 py-2 text-base lg:text-lg">
        <Link
          href="/"
          className="font-bold text-lg lg:text-xl mr-2 lg:mr-4 hover:text-indigo-700"
        >
          Nils Fink
        </Link>
        {links.map((l) => (
          <Link
            key={l.to}
            href={l.to}
            className={`px-4 lg:px-5 py-2 rounded-full font-semibold hover:bg-indigo-100 ${
              isActive(l.to) ? "bg-indigo-100 text-indigo-800" : "text-slate-800"
            }`}
          >
            {l.label}
          </Link>
        ))}
        {/* Contact jumps to the "Get in touch" section on the landing page */}
        <Link
          href="/#contact"
          className="bg-indigo-600 text-white font-semibold px-5 py-2 rounded-full hover:bg-indigo-700 ml-1"
        >
          <i className="bi bi-envelope-fill mr-2"></i>
          Contact
        </Link>
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full">
        <div className="flex items-center justify-between bg-white rounded-full px-5 py-3 shadow-2xl">
          <Link href="/" className="font-bold text-lg" onClick={() => setOpen(false)}>
            Nils Fink
          </Link>
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="text-2xl px-2"
          >
            <i className={open ? "bi bi-x-lg" : "bi bi-list"}></i>
          </button>
        </div>
        {open && (
          <div className="mt-2 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            {[...links, { to: "/#contact", label: "Contact" }].map((l) => (
              <Link
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className={`px-6 py-4 font-bold border-b border-slate-100 last:border-b-0 hover:bg-indigo-100 ${
                  isActive(l.to) ? "bg-indigo-50" : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Menubar;
