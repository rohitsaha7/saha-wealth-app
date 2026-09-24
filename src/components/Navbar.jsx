import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../assets/logos/logo.png";

const navigation = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Partners", "/partners"], ["Contact", "/contact"]];

function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/" onClick={closeMenu} className="flex min-w-0 items-center gap-2.5" aria-label="Prime Wealth home">
          <img src={logo} alt="" className="h-10 w-10 rounded-xl object-contain sm:h-11 sm:w-11" />
          <span className="min-w-0"><span className="block truncate text-base font-extrabold tracking-tight text-slate-950 sm:text-lg">Prime Wealth</span><span className="block truncate text-[10px] font-semibold tracking-[0.12em] text-blue-600 uppercase">Invest with clarity</span></span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map(([label, to]) => <NavLink key={to} to={to} className={({ isActive }) => `rounded-lg px-3 py-2 text-sm font-semibold transition ${isActive ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"}`}>{label}</NavLink>)}
        </div>

        <Link to="/contact" className="hidden items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:flex"><span>Free consultation</span><ArrowUpRight size={16} /></Link>

        <button type="button" className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-800 transition hover:bg-slate-50 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
      </nav>

      {open && <div className="border-t border-slate-100 bg-white px-4 py-3 shadow-xl lg:hidden"><div className="mx-auto grid max-w-7xl gap-1">
        {navigation.map(([label, to]) => <NavLink key={to} to={to} onClick={closeMenu} className={({ isActive }) => `rounded-xl px-4 py-3 text-sm font-bold ${isActive ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50"}`}>{label}</NavLink>)}
        <Link to="/contact" onClick={closeMenu} className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white">Free consultation <ArrowUpRight size={16} /></Link>
      </div></div>}
    </header>
  );
}

export default Navbar;
