import { Link } from 'react-router-dom';
import './Services.css';

const ResidentialServices = () => {
  return (
    <div className="services-page residential-services">
      <section className="services-hero">
        <div className="container">
          <div className="grid grid-2">
            <div className="services-content">
              <h1 className="fade-in">Residential Painting Services</h1>
              <p className="lead fade-in">
                Transform your home with our creative, professional approach. From feature walls to complete renovations, we make your vision reality.
              </p>
              <div className="services-cta fade-in">
                <Link to="/booking" className="btn btn-primary">Get Home Quote</Link>
                <a href="tel:07453817030" className="btn btn-secondary">Call 07453 817030</a>
              </div>
            </div>
            <div className="services-image">
              <img 
                src="/images/residential/20250605_2203_Freshly Painted Spaces_simple_compose_01jx0eybf2e56ahkyqhj27f4ae.png"
                alt="Beautiful residential interior"
                className="image-full-width"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="services-details section">
        <div className="container">
          <h2 className="section-title">Home Transformation Services</h2>
          <div className="services-grid grid grid-2">
            
            <div className="service-detail fade-in">
              <div className="service-image">
                <img 
                  src="/images/residential/20250605_2203_Freshly Painted Spaces_simple_compose_01jx0eybf3f6vtaekphaggg9jb.png"
                  alt="Feature wall design"
                />
              </div>
              <div className="service-content">
                <h3>Feature Walls & Accent Painting</h3>
                <p>Create stunning focal points with our creative feature wall designs and accent painting services.</p>
                <ul className="service-features">
                  <li>Custom colour consultation</li>
                  <li>Textured finishes</li>
                  <li>Geometric patterns</li>
                  <li>Colour-washing techniques</li>
                  <li>Metallic and special effects</li>
                </ul>
                <p className="turnaround"><strong>Typical turnaround:</strong> 1-2 days</p>
              </div>
            </div>

            <div className="service-detail fade-in">
              <div className="service-image">
                <img 
                  src="/images/residential/20250606_1638_Freshly Painted Interiors_simple_compose_01jx2eq5a8f28ryq8v2s832b32.png"
                  alt="Full room renovation"
                />
              </div>
              <div className="service-content">
                <h3>Complete Room Makeovers</h3>
                <p>Full interior renovations including walls, ceilings, trim, and woodwork for a comprehensive transformation.</p>
                <ul className="service-features">
                  <li>Walls and ceilings</li>
                  <li>Skirting and architraves</li>
                  <li>Door and window frames</li>
                  <li>Built-in furniture</li>
                  <li>Staircase painting</li>
                </ul>
                <p className="turnaround"><strong>Typical turnaround:</strong> 3-5 days per room</p>
              </div>
            </div>

            <div className="service-detail fade-in">
              <div className="service-image">
                <img 
                  src="/images/residential/20250605_2209_Joyful Home Walkthrough_simple_compose_01jx0f9mr4e5ks3gkc3fjqs2fm.png"
                  alt="Exterior house painting"
                />
              </div>
              <div className="service-content">
                <h3>Exterior Property Work</h3>
                <p>Protect and beautify your home's exterior with weather-resistant coatings and expert application.</p>
                <ul className="service-features">
                  <li>Masonry and render painting</li>
                  <li>Window and door frames</li>
                  <li>Fascias and soffits</li>
                  <li>Garden walls and fencing</li>
                  <li>Weather protection coatings</li>
                </ul>
                <p className="turnaround"><strong>Typical turnaround:</strong> 3-7 days</p>
              </div>
            </div>

            <div className="service-detail fade-in">
              <div className="service-image">
                <img 
                  src="/images/residential/20250605_2203_Freshly Painted Spaces_simple_compose_01jx0eybf4fndtzh0qkj2rey6q.png"
                  alt="Colour consultation service"
                />
              </div>
              <div className="service-content">
                <h3>Colour Consultation & Design</h3>
                <p>Professional colour advice and design consultation to create the perfect atmosphere for your home.</p>
                <ul className="service-features">
                  <li>Colour psychology consultation</li>
                  <li>Light and space analysis</li>
                  <li>Mood board creation</li>
                  <li>Sample applications</li>
                  <li>Room-by-room planning</li>
                </ul>
                <p className="turnaround"><strong>Typical turnaround:</strong> 1 day consultation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-guarantee section" style={{backgroundColor: 'var(--light-neutral)'}}>
        <div className="container">
          <div className="guarantee-content">
            <h2>Home Perfect Guarantee</h2>
            <p>Your home is your sanctuary. We guarantee perfect results with complete protection of your furniture and belongings throughout the process.</p>
            <div className="guarantee-features grid grid-3">
              <div className="guarantee-item">
                <h4>🏠 Furniture Protection</h4>
                <p>Complete masking and protection of all furniture, flooring, and belongings.</p>
              </div>
              <div className="guarantee-item">
                <h4>🎨 Premium Paints</h4>
                <p>Only the finest interior paints from Farrow & Ball, Little Greene, and Crown for lasting beauty.</p>
              </div>
              <div className="guarantee-item">
                <h4>🧹 Complete Cleanup</h4>
                <p>Thorough cleanup and removal of all materials, leaving your home spotless.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="residential-cta section-large">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Home?</h2>
            <p>Book a free consultation and let's discuss how we can bring your vision to life.</p>
            <div className="cta-actions">
              <Link to="/booking" className="btn btn-primary btn-large">Book Free Consultation</Link>
              <Link to="/gallery" className="btn btn-secondary">View Home Projects</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResidentialServices;