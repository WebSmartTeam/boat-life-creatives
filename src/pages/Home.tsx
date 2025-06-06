import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* SVG Background Patterns */}
      <div className="geometric-pattern"></div>
      
      {/* Hero Section */}
      <section className="hero">
        {/* Brutalist Floating Shapes */}
        <div className="floating-shapes">
          <div className="shape-1"></div>
          <div className="shape-2"></div>
          <div className="shape-3"></div>
        </div>
        <div className="dots-pattern"></div>
        <div className="grid-pattern"></div>
        
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">🚤 BOAT TRANSFORMATION SPECIALISTS</div>
              <h1 className="fade-in">PROFESSIONAL BOAT PAINTING THAT DELIVERS RESULTS</h1>
              <p className="hero-subtitle fade-in">15 years painting boats and houses around the area. I show up when I say I will, do the job properly, and clean up after myself. 500+ successful transformations with 3-year guarantee.</p>
              <div className="hero-features">
                <div className="feature-item">⚡ 48-Hour Turnaround</div>
                <div className="feature-item">💎 Showroom Quality</div>
                <div className="feature-item">🛡️ 3-Year Guarantee</div>
              </div>
              <div className="hero-cta fade-in">
                <Link to="/booking" className="btn btn-primary btn-large">Get FREE Quote Now</Link>
                <Link to="/gallery" className="btn btn-secondary">View Gallery</Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-main brutalist-frame">
                <img 
                  src="/images/marine/20250605_2207_Yacht Hull Refinishing_simple_compose_01jx0f5barefj8db6kg1mg1dqf.png"
                  alt="Boat hull painting work in progress"
                  className="hero-image"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider"></div>
      
      {/* Services Section */}
      <section className="services section-large">
        <div className="floating-shapes">
          <div className="shape-1" style={{top: '30%', left: '80%'}}></div>
          <div className="shape-2" style={{top: '70%', right: '85%'}}></div>
        </div>
        
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">Mainly boats, but I'll paint your house too if you need it doing properly</p>
          <div className="services-grid grid grid-3">
            
            <div className="service-card fade-in brutalist-card">
              <div className="service-image">
                <img 
                  src="/images/marine/20250605_2207_Yacht Hull Refinishing_simple_compose_01jx0f5bate4db61w6mqvjymv9.png"
                  alt="Marine painting services"
                />
                <div className="service-overlay">MARINE</div>
              </div>
              <div className="service-content">
                <h3>Boat Painting</h3>
                <p>15 years painting boats of all sizes. Hull work, anti-fouling, varnish, full resprays. I know marine paints inside out and what works in saltwater.</p>
                <ul className="service-features">
                  <li>Hull stripping & repainting</li>
                  <li>Anti-foul - done right</li>
                  <li>Cabin interiors</li>
                  <li>Deck work & varnishing</li>
                </ul>
                <Link to="/services/marine" className="service-link">See Boat Work</Link>
              </div>
            </div>

            <div className="service-card fade-in brutalist-card">
              <div className="service-image">
                <img 
                  src="/images/residential/20250605_2203_Freshly Painted Spaces_simple_compose_01jx0eybf2e56ahkyqhj27f4ae.png"
                  alt="Residential painting services"
                />
                <div className="service-overlay">RESIDENTIAL</div>
              </div>
              <div className="service-content">
                <h3>House Painting</h3>
                <p>When I'm not at the marina, I paint houses. Full rooms, single walls, ceilings, exteriors. Quality materials, tidy work, fair prices.</p>
                <ul className="service-features">
                  <li>Interior rooms & walls</li>
                  <li>Ceilings & woodwork</li>
                  <li>Exterior house painting</li>
                  <li>Prep work included</li>
                </ul>
                <Link to="/services/residential" className="service-link">See House Work</Link>
              </div>
            </div>

            <div className="service-card fade-in brutalist-card">
              <div className="service-image">
                <img 
                  src="/images/commercial/20250606_1639_Sleek Modern Office_simple_compose_01jx2ew9v0e9f8bk7cbqfbmz8q.png"
                  alt="Commercial painting services"
                />
                <div className="service-overlay">COMMERCIAL</div>
              </div>
              <div className="service-content">
                <h3>Commercial Work</h3>
                <p>Offices, shops, workshops. I work evenings and weekends so your business doesn't stop. Quick, tidy, good value.</p>
                <ul className="service-features">
                  <li>Weekend & evening work</li>
                  <li>Shops & office spaces</li>
                  <li>Industrial painting</li>
                  <li>Fast turnaround</li>
                </ul>
                <Link to="/services/commercial" className="service-link">See Commercial Work</Link>
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
              <h2>Why Choose Me?</h2>
              <p>15 years painting boats and houses around the area. I show up when I say I will, do the job properly, and clean up after myself.</p>
              <div className="features-list">
                <div className="feature">
                  <h4>⏰ Turn Up On Time</h4>
                  <p>I say Tuesday, I'm there Tuesday. Simple as that.</p>
                </div>
                <div className="feature">
                  <h4>🪣 Know My Materials</h4>
                  <p>15 years experience with marine paints and what works.</p>
                </div>
                <div className="feature">
                  <h4>🧽 Leave It Tidy</h4>
                  <p>Dust sheets down, clean up after. Leave your place better than I found it.</p>
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
            <h2>Need A Quote?</h2>
            <p>Call me for a chat about your job. Free quotes, fair prices, guaranteed work.</p>
            <div className="booking-actions">
              <a href="tel:07453817030" className="btn btn-primary btn-large">Call: 07453 817030</a>
              <Link to="/booking" className="btn btn-secondary">Send Message</Link>
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