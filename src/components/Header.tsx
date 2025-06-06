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
                <div className="mega-menu">
                  <div className="mega-menu-content">
                    <Link to="/services/marine" className="mega-menu-item">
                      <img 
                        src="/images/marine/20250605_2207_Yacht Hull Refinishing_simple_compose_01jx0f5barefj8db6kg1mg1dqf.png" 
                        alt="Marine Services"
                        className="mega-menu-image"
                      />
                      <div className="mega-menu-text">
                        <h4>Marine Services</h4>
                        <p>Professional boat painting, hull work, anti-fouling and marine finishes</p>
                      </div>
                    </Link>
                    <Link to="/services/residential" className="mega-menu-item">
                      <img 
                        src="/images/residential/20250605_2203_Freshly Painted Spaces_simple_compose_01jx0eybf2e56ahkyqhj27f4ae.png" 
                        alt="Residential Services"
                        className="mega-menu-image"
                      />
                      <div className="mega-menu-text">
                        <h4>Residential Services</h4>
                        <p>Interior & exterior house painting, feature walls, complete property refresh</p>
                      </div>
                    </Link>
                    <Link to="/services/commercial" className="mega-menu-item">
                      <img 
                        src="/images/commercial/20250606_1639_Sleek Modern Office_simple_compose_01jx2ew9v0e9f8bk7cbqfbmz8q.png" 
                        alt="Commercial Services"
                        className="mega-menu-image"
                      />
                      <div className="mega-menu-text">
                        <h4>Commercial Services</h4>
                        <p>Offices, retail spaces, industrial painting with minimal disruption</p>
                      </div>
                    </Link>
                  </div>
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