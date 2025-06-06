import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src="/images/logo/New LOGO.png" 
                alt="Boat Life Creatives" 
                className="footer-logo-image"
              />
              <p className="footer-tagline">Creative, Professional Painting for Boats, Homes & Spaces That Matter.</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/marine">Marine Painting</Link></li>
              <li><Link to="/services/residential">Residential Painting</Link></li>
              <li><Link to="/services/commercial">Commercial Spaces</Link></li>
              <li><Link to="/gallery">Portfolio Gallery</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/booking">Get Quote</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Phone:</strong>
                <a href="tel:07453817030">07453 817030</a>
              </div>
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:info@boatlifecreatives.co.uk">info@boatlifecreatives.co.uk</a>
              </div>
              <div className="contact-item">
                <strong>Website:</strong>
                <a href="https://www.boatlifecreatives.co.uk">www.boatlifecreatives.co.uk</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Boat Life Creatives. All rights reserved.</p>
            <div className="footer-bottom-links">
              <span>We Paint. You Relax.</span>
              <span>•</span>
              <span>Guaranteed for 3 years</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;