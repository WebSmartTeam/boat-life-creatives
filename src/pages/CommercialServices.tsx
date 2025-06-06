import { Link } from 'react-router-dom';
import './Services.css';

const CommercialServices = () => {
  return (
    <div className="services-page commercial-services">
      <section className="services-hero">
        <div className="container">
          <div className="grid grid-2">
            <div className="services-content">
              <h1 className="fade-in">Commercial Painting Services</h1>
              <p className="lead fade-in">
                Professional commercial painting with minimal disruption to your business operations. We work around your schedule to deliver exceptional results.
              </p>
              <div className="services-cta fade-in">
                <Link to="/booking" className="btn btn-primary">Get Business Quote</Link>
                <a href="tel:07453817030" className="btn btn-secondary">Call 07453 817030</a>
              </div>
            </div>
            <div className="services-image">
              <img 
                src="/images/commercial/20250606_1639_Sleek Modern Office_simple_compose_01jx2ew9v0e9f8bk7cbqfbmz8q.png"
                alt="Modern commercial office space"
                className="image-full-width zoom-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="services-details section">
        <div className="container">
          <h2 className="section-title">Commercial Solutions</h2>
          <div className="services-grid grid grid-2">
            
            <div className="service-detail fade-in">
              <div className="service-image">
                <img 
                  src="/images/commercial/20250606_1655_Modern Creative Workspace_simple_compose_01jx2fpqrhfgaae5az618crc1c.png"
                  alt="Creative workspace design"
                  className="zoom-image"
                />
              </div>
              <div className="service-content">
                <h3>Creative Workspaces</h3>
                <p>Transform your office into an inspiring environment that boosts productivity and reflects your brand identity.</p>
                <ul className="service-features">
                  <li>Brand-aligned colour schemes</li>
                  <li>Productivity-enhancing environments</li>
                  <li>Modern design trends</li>
                  <li>Acoustic considerations</li>
                  <li>Employee wellbeing focus</li>
                </ul>
                <p className="turnaround"><strong>Typical turnaround:</strong> 2-5 days</p>
              </div>
            </div>

            <div className="service-detail fade-in">
              <div className="service-image">
                <img 
                  src="/images/commercial/20250606_1643_Elegant Retail Showcase_simple_compose_01jx2f0a27f6c8y1mp1cz2vrsk.png"
                  alt="Retail space painting"
                  className="zoom-image"
                />
              </div>
              <div className="service-content">
                <h3>Retail & Hospitality</h3>
                <p>Create inviting customer spaces that enhance the shopping and dining experience while maintaining your business operations.</p>
                <ul className="service-features">
                  <li>Customer experience focused</li>
                  <li>After-hours scheduling</li>
                  <li>Quick turnaround</li>
                  <li>Durable commercial coatings</li>
                  <li>Brand consistency</li>
                </ul>
                <p className="turnaround"><strong>Typical turnaround:</strong> 1-3 days</p>
              </div>
            </div>

            <div className="service-detail fade-in">
              <div className="service-image">
                <img 
                  src="/images/commercial/20250606_1654_Modern Boutique Interior_simple_compose_01jx2fn3vkfrvt20v2c9ayqpfe.png"
                  alt="Office renovation"
                  className="zoom-image"
                />
              </div>
              <div className="service-content">
                <h3>Office Renovations</h3>
                <p>Complete office transformations that modernise your workspace while minimising business interruption.</p>
                <ul className="service-features">
                  <li>Phased project planning</li>
                  <li>Weekend and evening work</li>
                  <li>Modern professional finishes</li>
                  <li>Conference room speciality</li>
                  <li>Reception area focus</li>
                </ul>
                <p className="turnaround"><strong>Typical turnaround:</strong> 3-7 days</p>
              </div>
            </div>

            <div className="service-detail fade-in">
              <div className="service-image">
                <img 
                  src="/images/commercial/20250606_1659_Modern Stairwell Design_simple_compose_01jx2fzdgre89vcketwjmns7hh.png"
                  alt="Commercial maintenance"
                  className="zoom-image"
                />
              </div>
              <div className="service-content">
                <h3>Maintenance Programs</h3>
                <p>Ongoing maintenance contracts to keep your commercial property looking professional year-round.</p>
                <ul className="service-features">
                  <li>Scheduled maintenance visits</li>
                  <li>Touch-up services</li>
                  <li>Preventive care programs</li>
                  <li>Emergency response</li>
                  <li>Budget-friendly contracts</li>
                </ul>
                <p className="turnaround"><strong>Response time:</strong> 24-48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="commercial-guarantee section" style={{backgroundColor: 'var(--light-neutral)'}}>
        <div className="container">
          <div className="guarantee-content">
            <h2>Business Continuity Guarantee</h2>
            <p>We understand your business can't stop for painting. Our flexible scheduling and efficient processes ensure minimal disruption to your operations.</p>
            <div className="guarantee-features grid grid-3">
              <div className="guarantee-item">
                <h4>⏰ Flexible Scheduling</h4>
                <p>Evening, weekend, and holiday work available to suit your business needs.</p>
              </div>
              <div className="guarantee-item">
                <h4>🛡️ Commercial Grade</h4>
                <p>Only premium commercial coatings designed for high-traffic business environments.</p>
              </div>
              <div className="guarantee-item">
                <h4>📋 Project Management</h4>
                <p>Dedicated project coordination to ensure deadlines are met without compromising quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="commercial-cta section-large">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business Space?</h2>
            <p>Contact us for a comprehensive business painting consultation and competitive quote.</p>
            <div className="cta-actions">
              <Link to="/booking" className="btn btn-primary btn-large">Schedule Consultation</Link>
              <Link to="/gallery" className="btn btn-secondary">View Commercial Work</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialServices;