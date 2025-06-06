import { Link } from 'react-router-dom';
import './Services.css';

const ResidentialServices = () => {
  return (
    <div className="services-page residential-services">
      <section className="services-hero">
        <div className="paint-splash-accent">
          <img src="/client-images/paint splash.png" alt="" />
        </div>
        <div className="container">
          <div className="services-hero-grid">
            <div className="services-content">
              <div className="hero-badge fade-in">🏠 Property Painting Expert</div>
              <h1 className="fade-in">House Painting Done Right</h1>
              <p className="lead fade-in">
                When I'm not at the marina, I'm painting homes. Same attention to detail, 
                same quality finish - just on dry land.
              </p>
              <div className="services-cta fade-in">
                <Link to="/booking" className="btn btn-primary btn-large">Get Free Quote</Link>
                <a href="tel:07453817030" className="btn btn-secondary btn-large">📞 Call Now</a>
              </div>
            </div>
            <div className="services-image fade-in">
              <div className="image-frame watercolor">
                <img 
                  src="/images/residential/20250605_2203_Freshly Painted Spaces_simple_compose_01jx0eybf2e56ahkyqhj27f4ae.png"
                  alt="Beautiful residential interior"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-details section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="fade-in">What I Do For Homes</h2>
            <p className="lead fade-in">Single rooms to full houses - all done with care</p>
          </div>
          <div className="services-grid grid grid-2">
            
            <div className="service-detail card fade-in">
              <div className="service-image">
                <img 
                  src="/images/residential/20250605_2203_Freshly Painted Spaces_simple_compose_01jx0eybf3f6vtaekphaggg9jb.png"
                  alt="Feature wall design"
                />
              </div>
              <div className="service-content">
                <h3>Single Rooms & Walls</h3>
                <p>Just need one room done? Feature wall? No problem. I'll match your existing colours or help you pick new ones.</p>
                <ul className="service-features">
                  <li>Feature walls</li>
                  <li>Colour matching</li>
                  <li>Clean lines & edges</li>
                  <li>Furniture protected</li>
                  <li>Minimal disruption</li>
                </ul>
                <p className="turnaround"><strong>Time needed:</strong> 1-2 days</p>
              </div>
            </div>

            <div className="service-detail card fade-in">
              <div className="service-image">
                <img 
                  src="/images/residential/20250606_1638_Freshly Painted Interiors_simple_compose_01jx2eq5a8f28ryq8v2s832b32.png"
                  alt="Full room renovation"
                />
              </div>
              <div className="service-content">
                <h3>Full House Refresh</h3>
                <p>Walls, ceilings, woodwork - the lot. I'll work room by room so you can still live normally.</p>
                <ul className="service-features">
                  <li>All walls & ceilings</li>
                  <li>Skirting boards</li>
                  <li>Doors & frames</li>
                  <li>Staircase & bannisters</li>
                  <li>Work around your schedule</li>
                </ul>
                <p className="turnaround"><strong>Time needed:</strong> 1-2 weeks typical house</p>
              </div>
            </div>

            <div className="service-detail card fade-in">
              <div className="service-image">
                <img 
                  src="/images/residential/20250605_2209_Joyful Home Walkthrough_simple_compose_01jx0f9mr4e5ks3gkc3fjqs2fm.png"
                  alt="Exterior house painting"
                />
              </div>
              <div className="service-content">
                <h3>Outside Work</h3>
                <p>Weather-proof paints for exteriors. Protect your home and make it look smart from the street.</p>
                <ul className="service-features">
                  <li>Exterior walls</li>
                  <li>Windows & doors</li>
                  <li>Fascias & soffits</li>
                  <li>Garden walls</li>
                  <li>Weather-resistant paints</li>
                </ul>
                <p className="turnaround"><strong>Time needed:</strong> 3-7 days</p>
              </div>
            </div>

            <div className="service-detail card fade-in">
              <div className="service-image">
                <img 
                  src="/images/residential/20250605_2203_Freshly Painted Spaces_simple_compose_01jx0eybf4fndtzh0qkj2rey6q.png"
                  alt="Colour consultation service"
                />
              </div>
              <div className="service-content">
                <h3>Help Choosing Colours</h3>
                <p>Can't decide on colours? I'll bring samples, show you what works, help you pick something you'll love.</p>
                <ul className="service-features">
                  <li>Colour samples</li>
                  <li>Test patches</li>
                  <li>Work with your furniture</li>
                  <li>Consider the light</li>
                  <li>No pressure advice</li>
                </ul>
                <p className="turnaround"><strong>Time needed:</strong> Free with quote</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-guarantee section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="fade-in">Working In Your Home</h2>
            <p className="lead fade-in">I treat every house like it's my own</p>
          </div>
          <div className="guarantee-features grid grid-3">
            <div className="guarantee-item card fade-in">
              <h4>🏠 Furniture Safe</h4>
              <p>Dust sheets down, furniture covered, floors protected. You shouldn't find paint where it shouldn't be.</p>
            </div>
            <div className="guarantee-item card fade-in">
              <h4>🎨 Quality Paints</h4>
              <p>Dulux, Crown, Farrow & Ball - whatever suits your budget. I'll advise what works best.</p>
            </div>
            <div className="guarantee-item card fade-in">
              <h4>🧹 Left Clean</h4>
              <p>Tidy as I go, full clean up after. You get your room back ready to use.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="cta-background"></div>
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="fade-in">Want A Quote For Your Home?</h2>
            <p className="lead fade-in">
              I'll come round, have a look, give you a fair price. No obligation.
            </p>
            <div className="cta-actions fade-in">
              <a href="tel:07453817030" className="btn btn-large btn-white">
                📞 Call: 07453 817030
              </a>
              <Link to="/booking" className="btn btn-large btn-outline-white">
                Book Quote Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResidentialServices;