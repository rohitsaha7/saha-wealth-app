import { Link } from "react-router-dom";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import "./Footer.css";

function Footer() {
  return <footer className="footer"><div className="footer-container"><div className="footer-column footer-brand"><p className="footer-eyebrow">Prime Wealth</p><h2 className="footer-logo">Confidence for every financial decision.</h2><p className="footer-description">Your trusted partner for investment, insurance, and loan solutions.</p></div><div className="footer-column"><h3>Explore</h3><ul><li><Link to="/">Home</Link></li><li><Link to="/about">About</Link></li><li><Link to="/services">Services</Link></li><li><Link to="/partners">Partners</Link></li></ul></div><div className="footer-column"><h3>Solutions</h3><ul><li>Investment planning</li><li>Insurance protection</li><li>Personal & business loans</li></ul></div><div className="footer-column"><h3>Contact</h3><a href="tel:+918638499045"><Phone size={17} /> +91 8638499045</a><a href="mailto:wealthgate6@gmail.com"><Mail size={17} /> wealthgate6@gmail.com</a><p><MapPin size={17} /> Guwahati | Lumding, Assam</p><a className="footer-whatsapp" href="https://wa.me/918638499045" target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp us</a></div></div><div className="footer-bottom"><p>© 2026 Prime Wealth. All rights reserved.</p><p>Invest smart. Live better.</p></div></footer>;
}
export default Footer;
