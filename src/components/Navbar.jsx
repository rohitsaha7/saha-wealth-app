import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../assets/logos/logo.png";

const navigation = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Partners", "/partners"],
  ["Contact", "/contact"],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <nav
        className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Brand Logo & Wordmark */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3 transition hover:opacity-90"
          aria-label="SAHATRA Home"
        >
          <img
            src={logo}
            alt="SAHATRA Logo"
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
          />
          <div className="flex flex-col">
            {/* Logo treatment: SAHA in uppercase, tra in lowercase black */}
            <span className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
              SAHA<span className="text-slate-950">tra</span>
            </span>
            {/* Tagline: plan protect grow */}
            <span className="text-[10px] font-bold tracking-[0.18em] text-slate-500 uppercase">
              plan protect grow
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links — Wide spacing (gap-8) */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-semibold transition-all duration-200 py-1 ${
                  isActive
                    ? "text-blue-600 font-bold border-b-2 border-blue-600"
                    : "text-slate-600 hover:text-slate-950"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Action / Contact Button */}
        <div className="hidden items-center sm:flex">
          <Link
            to="/contact"
            className="flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-blue-600 hover:shadow-lg active:scale-95"
          >
            <span>Free consultation</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-800 transition hover:bg-slate-100 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 shadow-2xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-3">
            {navigation.map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base font-bold transition ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3.5 text-base font-bold text-white shadow-md active:scale-95"
            >
              <span>Free consultation</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;