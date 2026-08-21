import { Link } from "react-router-dom";

import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}
        <div className="footer-column">
          <h2 className="footer-logo">
            Prime Wealth
          </h2>

          <p className="footer-description">
            Your trusted partner for Investment, Insurance &
            Loan Solutions.
          </p>
        </div>


        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/partners">Partners</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

        </div>


        {/* Services */}
        <div className="footer-column">

          <h3>Services</h3>

          <ul>
            <li>📈 Investment</li>
            <li>🛡 Insurance</li>
            <li>🏦 Loans</li>
          </ul>

        </div>


        {/* Contact */}
        <div className="footer-column">

          <h3>Contact</h3>

          <p>
            <Phone size={18} />
            +91 8638499045
          </p>

          <p>
            <Mail size={18} />
            wealthgate6@gmail.com
          </p>

          <p>
            <MapPin size={18} />
            Guwahati | Lumding, Assam
          </p>


          {/* WhatsApp */}
          <div className="social-icons">

            <a
              href="#"
              aria-label="WhatsApp"
            >
              <MessageCircle size={22} />
            </a>

          </div>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 Prime Wealth. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;