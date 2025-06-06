import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img 
              src="/images/logo/New LOGO.png" 
              alt="Boat Life Creatives" 
              className="logo-image"
            />
          </Link>
          
          <div className="header-right">
            <div className="phone-cta">
              <span className="phone-label">Call for Quote:</span>
              <a href="tel:07453817030" className="phone-number">07453 817030</a>
            </div>
            
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <Link to="/about" className="nav-link">About</Link>
              <div className="nav-dropdown">
                <span className="nav-link">Services</span>
                <div className="dropdown-content">
                  <Link to="/services/marine">Marine</Link>
                  <Link to="/services/residential">Residential</Link>
                  <Link to="/services/commercial">Commercial</Link>
                </div>
              </div>
              <Link to="/gallery" className="nav-link">Gallery</Link>
              <Link to="/testimonials" className="nav-link">Testimonials</Link>
              <Link to="/faq" className="nav-link">FAQ</Link>
              <Link to="/booking" className="nav-link booking-btn">Book Now</Link>
            </nav>
          </div>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;