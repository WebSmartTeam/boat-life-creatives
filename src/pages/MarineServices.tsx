import { Link } from 'react-router-dom';
import './Services.css';

const MarineServices = () => {
  return (
    <div className="services-page marine-services">
      <section className="services-hero">
        <div className="container">
          <div className="grid grid-2">
            <div className="services-content">
              <h1 className="fade-in">Marine Painting Services</h1>
              <p className="lead fade-in">
                Expert marine coatings for boats that demand the finest protection and finish. From luxury yachts to working vessels, we deliver marine-grade excellence.
              </p>
              <div className="services-cta fade-in">
                <Link to="/booking" className="btn btn-primary">Get Marine Quote</Link>
                <a href="tel:07453817030" className="btn btn-secondary">Call 07453 817030</a>
              </div>
            </div>
            <div className="services-image">
              <img 
                src="/images/marine/20250605_2207_Yacht Hull Refinishing_simple_compose_01jx0f5barefj8db6kg1mg1dqf.png"
                alt="Professional yacht hull refinishing"
                className="image-full-width"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="services-details section">
        <div className="container">
          <h2 className="section-title">Our Marine Specialities</h2>
          <div className="services-grid grid grid-2">
            
            <div className="service-detail fade-in">
              <div className="service-image">
                <img 
                  src="/images/marine/20250605_2207_Yacht Hull Refinishing_simple_compose_01jx0f5bate4db61w6mqvjymv9.png"
                  alt="Hull restoration and refinishing"
                />
              </div>
              <div className="service-content">
                <h3>Hull Restoration & Refinishing</h3>
                <p>Complete hull transformation using marine-grade primers, base coats, and protective finishes designed to withstand harsh marine environments.</p>
                <ul className="service-features">
                  <li>Fibreglass repair and fairing</li>
                  <li>Epoxy primer application</li>
                  <li>High-build undercoats</li>
                  <li>Premium topcoat finishes</li>
                  <li>Gel coat restoration</li>
                </ul>
                <p className="turnaround"><strong>Typical turnaround:</strong> 5-10 days depending on vessel size</p>
              </div>
            </div>

            <div className="service-detail fade-in">
              <div className="service-image">
                <img 
                  src="/images/marine/20250605_2207_Yacht Hull Refinishing_simple_compose_01jx0f5bavfm7tjnzchcfq5emv.png"
                  alt="Anti-foul application"
                />
              </div>
              <div className="service-content">
                <h3>Anti-Foul Application</h3>
                <p>Professional anti-fouling using the latest copper-free and biocide technologies for maximum protection and environmental responsibility.</p>
                <ul className="service-features">
                  <li>Hull cleaning and preparation</li>
                  <li>Premium anti-foul selection</li>
                  <li>Even application techniques</li>
                  <li>Propeller and running gear</li>
                  <li>Annual maintenance programs</li>
                </ul>
                <p className="turnaround"><strong>Typical turnaround:</strong> 1-3 days</p>
              </div>
            </div>

            <div className="service-detail fade-in">
              <div className="service-image">
                <img 
                  src="/images/marine/20250606_1652_Sleek Boat Deck_simple_compose_01jx2fhsjxe9vvmmwspyxw55gm.png"
                  alt="Interior cabin refinishing"
                />
              </div>
              <div className="service-content">
                <h3>Interior Cabin Work</h3>
                <p>Transform your boat's interior with moisture-resistant coatings and finishes that maintain their beauty in the challenging marine environment.</p>
                <ul className="service-features">
                  <li>Cabin walls and ceilings</li>
                  <li>Moisture-resistant primers</li>
                  <li>Mildew-resistant topcoats</li>
                  <li>Wood staining and varnishing</li>
                  <li>Deck and cockpit refinishing</li>
                </ul>
                <p className="turnaround"><strong>Typical turnaround:</strong> 3-7 days</p>
              </div>
            </div>

            <div className="service-detail fade-in">
              <div className="service-image">
                <img 
                  src="/images/gallery/20250605_2212_Macro Paint Details_simple_compose_01jx0fep3bev8tv7pj7e4ts85j.png"
                  alt="Detailed marine coating work"
                />
              </div>
              <div className="service-content">
                <h3>Specialist Marine Coatings</h3>
                <p>Advanced protective systems including non-slip surfaces, underwater coatings, and specialised finishes for extreme marine conditions.</p>
                <ul className="service-features">
                  <li>Non-slip deck coatings</li>
                  <li>Underwater hull treatments</li>
                  <li>Radar arch and metalwork</li>
                  <li>Custom colour matching</li>
                  <li>Insurance repair work</li>
                </ul>
                <p className="turnaround"><strong>Typical turnaround:</strong> 2-5 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marine-guarantee section" style={{backgroundColor: 'var(--light-neutral)'}}>
        <div className="container">
          <div className="guarantee-content">
            <h2>Marine-Grade Guarantee</h2>
            <p>Every marine project comes with our comprehensive 3-year guarantee, covering both materials and workmanship. We understand the demanding marine environment and stand behind our work.</p>
            <div className="guarantee-features grid grid-3">
              <div className="guarantee-item">
                <h4>🌊 Weather Protection</h4>
                <p>All work guaranteed against UV degradation, salt water exposure, and extreme weather conditions.</p>
              </div>
              <div className="guarantee-item">
                <h4>⚓ Marine-Grade Materials</h4>
                <p>Only the finest marine coatings from trusted brands like International, Awlgrip, and Alexseal.</p>
              </div>
              <div className="guarantee-item">
                <h4>🔧 Expert Application</h4>
                <p>Certified marine coating specialists with years of experience in yacht and boat refinishing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marine-cta section-large">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Restore Your Vessel?</h2>
            <p>Get a detailed quote for your marine painting project. We provide comprehensive assessments and transparent pricing.</p>
            <div className="cta-actions">
              <Link to="/booking" className="btn btn-primary btn-large">Book Marine Assessment</Link>
              <Link to="/gallery" className="btn btn-secondary">View Marine Portfolio</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarineServices;