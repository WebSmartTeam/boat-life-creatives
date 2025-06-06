import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">✨ Premium Painting Services</div>
              <h1 className="fade-in">Transform Your Space with Professional Excellence</h1>
              <p className="hero-subtitle fade-in">We Paint. You Relax. Experience the difference of true craftsmanship.</p>
              <div className="hero-features">
                <div className="feature-item">🚤 Marine Specialists</div>
                <div className="feature-item">🏠 Residential Experts</div>
                <div className="feature-item">🏢 Commercial Solutions</div>
              </div>
              <div className="hero-cta fade-in">
                <Link to="/booking" className="btn btn-primary btn-large">Get Free Quote</Link>
                <Link to="/gallery" className="btn btn-secondary">View Portfolio</Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-grid">
                <div className="hero-main-image">
                  <img 
                    src="/images/marine/20250605_2207_Yacht Hull Refinishing_simple_compose_01jx0f5barefj8db6kg1mg1dqf.png"
                    alt="Professional yacht refinishing"
                    className="zoom-image"
                  />
                </div>
                <div className="hero-secondary-images">
                  <img 
                    src="/images/residential/20250605_2203_Freshly Painted Spaces_simple_compose_01jx0eybf2e56ahkyqhj27f4ae.png"
                    alt="Beautiful residential interior"
                    className="zoom-image"
                  />
                  <img 
                    src="/images/commercial/20250606_1639_Sleek Modern Office_simple_compose_01jx2ew9v0e9f8bk7cbqfbmz8q.png"
                    alt="Modern office space"
                    className="zoom-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section-large">
        <div className="container">
          <h2 className="section-title">Our Specialities</h2>
          <div className="services-grid grid grid-3">
            
            <div className="service-card fade-in">
              <div className="service-image">
                <img 
                  src="/images/marine/20250605_2207_Yacht Hull Refinishing_simple_compose_01jx0f5bate4db61w6mqvjymv9.png"
                  alt="Marine painting services"
                />
              </div>
              <div className="service-content">
                <h3>Marine Painting</h3>
                <p>Boat exteriors, interiors, hulls, anti-foul and refinishing. Expert marine coatings for lasting protection and stunning aesthetics.</p>
                <ul className="service-features">
                  <li>Hull restoration & refinishing</li>
                  <li>Anti-foul applications</li>
                  <li>Interior cabin work</li>
                  <li>Marine-grade coatings</li>
                </ul>
                <Link to="/services/marine" className="service-link">Learn More</Link>
              </div>
            </div>

            <div className="service-card fade-in">
              <div className="service-image">
                <img 
                  src="/images/residential/20250605_2203_Freshly Painted Spaces_simple_compose_01jx0eybf2e56ahkyqhj27f4ae.png"
                  alt="Residential painting services"
                />
              </div>
              <div className="service-content">
                <h3>Residential Painting</h3>
                <p>Interiors, feature walls, and full property refresh. Transform your home with our creative, professional approach.</p>
                <ul className="service-features">
                  <li>Feature walls & accent painting</li>
                  <li>Full room renovations</li>
                  <li>Exterior property work</li>
                  <li>Color consultation</li>
                </ul>
                <Link to="/services/residential" className="service-link">Learn More</Link>
              </div>
            </div>

            <div className="service-card fade-in">
              <div className="service-image">
                <img 
                  src="/images/commercial/20250606_1639_Sleek Modern Office_simple_compose_01jx2ew9v0e9f8bk7cbqfbmz8q.png"
                  alt="Commercial painting services"
                />
              </div>
              <div className="service-content">
                <h3>Commercial Spaces</h3>
                <p>Offices, studios, and creative spaces with minimal downtime. Professional results that keep your business running.</p>
                <ul className="service-features">
                  <li>Out-of-hours painting</li>
                  <li>Minimal disruption plans</li>
                  <li>Creative workspace design</li>
                  <li>Quick turnaround</li>
                </ul>
                <Link to="/services/commercial" className="service-link">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose section" style={{backgroundColor: 'var(--light-neutral)'}}>
        <div className="container">
          <div className="grid grid-2">
            <div className="content-block">
              <h2>Boat-ready. Home-perfect. Always Finished On Time.</h2>
              <p>We blend creative execution with clean professionalism, positioning ourselves more like a design-forward brand than traditional tradespeople.</p>
              <div className="features-list">
                <div className="feature">
                  <h4>⏱️ Punctual & Reliable</h4>
                  <p>We respect your time and deliver exactly when promised.</p>
                </div>
                <div className="feature">
                  <h4>🎨 Creative Excellence</h4>
                  <p>Design-forward approach with attention to every detail.</p>
                </div>
                <div className="feature">
                  <h4>🧽 Clean & Professional</h4>
                  <p>Tidy work practices and complete site cleanup.</p>
                </div>
              </div>
            </div>
            <div className="image-block">
              <img 
                src="/images/team/20250605_2205_Professional Wall Painter_simple_compose_01jx0f33dbftp8ya4jpx85wrq8.png"
                alt="Professional painter at work"
                className="image-full-width"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking */}
      <section className="quick-booking section-large">
        <div className="container">
          <div className="booking-content">
            <h2>Booked in 3 minutes. Painted in 3 days. Guaranteed for 3 years.</h2>
            <p>Ready to transform your space? Get an instant quote and book your site visit.</p>
            <div className="booking-actions">
              <Link to="/booking" className="btn btn-primary btn-large">Get Instant Quote</Link>
              <a href="tel:07453817030" className="btn btn-secondary">Call 07453 817030</a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Preview */}
      <section className="recent-work section">
        <div className="container">
          <h2>Recent Work</h2>
          <div className="work-gallery grid grid-3">
            <img src="/images/before-after/20250605_2208_Restoration Transformation Showcase_simple_compose_01jx0f80qxfmy8m1h7w7kk521p.png" alt="Before transformation" />
            <img src="/images/before-after/20250606_1648_Boat Hull Transformation_simple_compose_01jx2fak7pe1aamq22f82hph8b.png" alt="Boat hull transformation" />
            <img src="/images/before-after/20250606_1653_Stairwell Transformation_simple_compose_01jx2fjfp0e8fsmq1c9pr9vt4w.png" alt="Stairwell transformation" />
          </div>
          <div className="work-cta">
            <Link to="/gallery" className="btn btn-secondary">View Full Gallery</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;