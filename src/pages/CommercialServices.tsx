import { Link } from 'react-router-dom';
import './Services.css';

const CommercialServices = () => {
  return (
    <div className="services-page commercial-services">
      <section className="services-hero">
        <div className="paint-splash-accent">
          <img src="/client-images/paint splash.png" alt="" />
        </div>
        <div className="container">
          <div className="services-hero-grid">
            <div className="services-content">
              <div className="hero-badge fade-in">🏢 Commercial Painting</div>
              <h1 className="fade-in">Keep Your Business Looking Sharp</h1>
              <p className="lead fade-in">
                Offices, shops, workshops - I work evenings and weekends so you don't lose business. 
                Quick, clean, professional.
              </p>
              <div className="services-cta fade-in">
                <Link to="/booking" className="btn btn-primary btn-large">Get Free Quote</Link>
                <a href="tel:07453817030" className="btn btn-secondary btn-large">📞 Call Now</a>
              </div>
            </div>
            <div className="services-image fade-in">
              <div className="image-frame watercolor">
                <img 
                  src="/images/commercial/20250606_1639_Sleek Modern Office_simple_compose_01jx2ew9v0e9f8bk7cbqfbmz8q.png"
                  alt="Modern commercial office space"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-details section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="fade-in">What I Do For Businesses</h2>
            <p className="lead fade-in">Work around your hours, get it done fast</p>
          </div>
          <div className="services-grid grid grid-2">
            
            <div className="service-detail card fade-in">
              <div className="service-image">
                <img 
                  src="/images/commercial/20250606_1655_Modern Creative Workspace_simple_compose_01jx2fpqrhfgaae5az618crc1c.png"
                  alt="Creative workspace design"
                />
              </div>
              <div className="service-content">
                <h3>Office Spaces</h3>
                <p>Fresh paint makes a better workplace. I'll work weekends or evenings to get it done without disrupting your team.</p>
                <ul className="service-features">
                  <li>Weekend & evening work</li>
                  <li>Your brand colours</li>
                  <li>Meeting rooms</li>
                  <li>Reception areas</li>
                  <li>Staff areas</li>
                </ul>
                <p className="turnaround"><strong>Time needed:</strong> 2-5 days</p>
              </div>
            </div>

            <div className="service-detail card fade-in">
              <div className="service-image">
                <img 
                  src="/images/commercial/20250606_1643_Elegant Retail Showcase_simple_compose_01jx2f0a27f6c8y1mp1cz2vrsk.png"
                  alt="Retail space painting"
                />
              </div>
              <div className="service-content">
                <h3>Shops & Restaurants</h3>
                <p>Can't close for painting? No problem. I'll work overnight or early mornings. You open as normal.</p>
                <ul className="service-features">
                  <li>Overnight work available</li>
                  <li>Quick drying paints</li>
                  <li>No smell next day</li>
                  <li>Tough finishes</li>
                  <li>Match your branding</li>
                </ul>
                <p className="turnaround"><strong>Time needed:</strong> 1-3 nights</p>
              </div>
            </div>

            <div className="service-detail card fade-in">
              <div className="service-image">
                <img 
                  src="/images/commercial/20250606_1654_Modern Boutique Interior_simple_compose_01jx2fn3vkfrvt20v2c9ayqpfe.png"
                  alt="Office renovation"
                />
              </div>
              <div className="service-content">
                <h3>Workshops & Industrial</h3>
                <p>Warehouses, workshops, factories. Heavy-duty paints that can take a beating.</p>
                <ul className="service-features">
                  <li>Industrial coatings</li>
                  <li>Floor paints</li>
                  <li>Safety markings</li>
                  <li>Work bay by bay</li>
                  <li>Minimal downtime</li>
                </ul>
                <p className="turnaround"><strong>Time needed:</strong> Depends on size</p>
              </div>
            </div>

            <div className="service-detail card fade-in">
              <div className="service-image">
                <img 
                  src="/images/commercial/20250606_1659_Modern Stairwell Design_simple_compose_01jx2fzdgre89vcketwjmns7hh.png"
                  alt="Commercial maintenance"
                />
              </div>
              <div className="service-content">
                <h3>Regular Maintenance</h3>
                <p>Keep your place looking smart year-round. Regular touch-ups, scheduled visits, fixed prices.</p>
                <ul className="service-features">
                  <li>Annual contracts</li>
                  <li>Scheduled visits</li>
                  <li>Touch-ups included</li>
                  <li>Priority service</li>
                  <li>Budget friendly</li>
                </ul>
                <p className="turnaround"><strong>Response:</strong> Next day for contracts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="commercial-guarantee section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="fade-in">Why Businesses Choose Me</h2>
            <p className="lead fade-in">I understand you can't shut down for painting</p>
          </div>
          <div className="guarantee-features grid grid-3">
            <div className="guarantee-item card fade-in">
              <h4>⏰ Work Your Hours</h4>
              <p>Evenings, weekends, overnight - whenever suits you. Your business keeps running.</p>
            </div>
            <div className="guarantee-item card fade-in">
              <h4>🛡️ Tough Paints</h4>
              <p>Commercial-grade paints that handle heavy use. Scrubbable, durable, long-lasting.</p>
            </div>
            <div className="guarantee-item card fade-in">
              <h4>📋 Fixed Quotes</h4>
              <p>Price agreed upfront. No surprises. I stick to deadlines and budgets.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="cta-background"></div>
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="fade-in">Let's Discuss Your Business Needs</h2>
            <p className="lead fade-in">
              Free quote, flexible scheduling, fair prices. Call me to sort it out.
            </p>
            <div className="cta-actions fade-in">
              <a href="tel:07453817030" className="btn btn-large btn-white">
                📞 Call: 07453 817030
              </a>
              <Link to="/booking" className="btn btn-large btn-outline-white">
                Schedule Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialServices;