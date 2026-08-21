import logo from "../assets/logos/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Prime Wealth Logo"
            className="h-14 w-auto"
          />

          <div>
            <h1 className="text-xl font-bold text-blue-700">
              Prime Wealth
            </h1>

            <p className="text-xs text-gray-500">
              Invest Smart, Live Better
            </p>
          </div>
        </Link>


        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">

          <li>
            <Link
              to="/"
              className="hover:text-blue-700 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-blue-700 transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              className="hover:text-blue-700 transition"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/partners"
              className="hover:text-blue-700 transition"
            >
              Partners
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-blue-700 transition"
            >
              Contact
            </Link>
          </li>

        </ul>


        {/* CTA Button */}
        <Link
          to="/contact"
          className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Request Consultation
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;