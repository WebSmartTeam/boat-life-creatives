import { Link } from 'react-router-dom';
import './Services.css';

const MarineServices = () => {
  return (
    <div className="services-page marine-services">
      <section className="services-hero">
        <div className="paint-splash-accent">
          <img src="/client-images/paint splash.png" alt="" />
        </div>
        <div className="container">
          <div className="services-hero-grid">
            <div className="services-content">
              <div className="hero-badge fade-in">🛥️ 15 Years Marine Experience</div>
              <h1 className="fade-in">Boat Painting That Lasts</h1>
              <p className="lead fade-in">
                15 years painting boats of all sizes. I know what works in saltwater, what doesn't, 
                and how to make your boat look brilliant again.
              </p>
              <div className="services-cta fade-in">
                <Link to="/booking" className="btn btn-primary btn-large">Get Free Quote</Link>
                <a href="tel:07453817030" className="btn btn-secondary btn-large">📞 Call Now</a>
              </div>
            </div>
            <div className="services-image fade-in">
              <div className="image-frame watercolor">
                <img 
                  src="/images/marine/20250605_2207_Yacht Hull Refinishing_simple_compose_01jx0f5barefj8db6kg1mg1dqf.png"
                  alt="Professional yacht hull refinishing"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-details section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="fade-in">What I Do For Boats</h2>
            <p className="lead fade-in">From quick anti-foul jobs to full resprays - all done properly</p>
          </div>
          <div className="services-grid grid grid-2">
            
            <div className="service-detail card fade-in">
              <div className="service-image">
                <img 
                  src="/images/marine/20250605_2207_Yacht Hull Refinishing_simple_compose_01jx0f5bate4db61w6mqvjymv9.png"
                  alt="Hull restoration and refinishing"
                />
              </div>
              <div className="service-content">
                <h3>Hull Work</h3>
                <p>Full hull resprays or patch repairs. Strip back the old, prep it right, apply marine-grade paint that'll last years not months.</p>
                <ul className="service-features">
                  <li>Fibreglass repairs if needed</li>
                  <li>Proper prep - the key to lasting finish</li>
                  <li>Marine primers & topcoats</li>
                  <li>Gel coat work</li>
                  <li>Match existing colours</li>
                </ul>
                <p className="turnaround"><strong>Time needed:</strong> 5-10 days for full hull</p>
              </div>
            </div>

            <div className="service-detail card fade-in">
              <div className="service-image">
                <img 
                  src="/images/marine/20250605_2207_Yacht Hull Refinishing_simple_compose_01jx0f5bavfm7tjnzchcfq5emv.png"
                  alt="Anti-foul application"
                />
              </div>
              <div className="service-content">
                <h3>Anti-Fouling</h3>
                <p>Keep the barnacles off and your boat running smooth. I know which anti-foul works best in our waters.</p>
                <ul className="service-features">
                  <li>Clean & prep the hull properly</li>
                  <li>Right anti-foul for your boat</li>
                  <li>Even coats, no missed spots</li>
                  <li>Props and running gear too</li>
                  <li>Annual reminder service</li>
                </ul>
                <p className="turnaround"><strong>Time needed:</strong> 1-3 days</p>
              </div>
            </div>

            <div className="service-detail card fade-in">
              <div className="service-image">
                <img 
                  src="/images/marine/20250606_1652_Sleek Boat Deck_simple_compose_01jx2fhsjxe9vvmmwspyxw55gm.png"
                  alt="Interior cabin refinishing"
                />
              </div>
              <div className="service-content">
                <h3>Cabin & Interior</h3>
                <p>Freshen up the inside. Marine paints that won't peel in damp conditions, varnish that protects your woodwork.</p>
                <ul className="service-features">
                  <li>Cabin walls & ceilings</li>
                  <li>Moisture-resistant paints</li>
                  <li>No mould, no mildew</li>
                  <li>Varnish work done right</li>
                  <li>Deck painting too</li>
                </ul>
                <p className="turnaround"><strong>Time needed:</strong> 3-7 days</p>
              </div>
            </div>

            <div className="service-detail card fade-in">
              <div className="service-image">
                <img 
                  src="/images/gallery/20250605_2212_Macro Paint Details_simple_compose_01jx0fep3bev8tv7pj7e4ts85j.png"
                  alt="Detailed marine coating work"
                />
              </div>
              <div className="service-content">
                <h3>Other Boat Work</h3>
                <p>Non-slip decks, metalwork, custom jobs. If it's on a boat and needs painting, I've probably done it before.</p>
                <ul className="service-features">
                  <li>Non-slip deck coatings</li>
                  <li>Metalwork & rails</li>
                  <li>Match any colour</li>
                  <li>Insurance repairs</li>
                  <li>Quick patch jobs</li>
                </ul>
                <p className="turnaround"><strong>Time needed:</strong> Depends on the job</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marine-guarantee section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="fade-in">Why Boat Owners Trust Me</h2>
            <p className="lead fade-in">15 years at the marina means I know boats</p>
          </div>
          <div className="guarantee-features grid grid-3">
            <div className="guarantee-item card fade-in">
              <h4>🌊 Know The Sea</h4>
              <p>Salt water's tough on paint. I use marine products that actually last in our conditions.</p>
            </div>
            <div className="guarantee-item card fade-in">
              <h4>⚓ Proper Materials</h4>
              <p>International, Hempel, Jotun - I use the brands that work, not the cheapest tin on the shelf.</p>
            </div>
            <div className="guarantee-item card fade-in">
              <h4>🔧 Done Right</h4>
              <p>Prep work's everything with boats. Rush it and you'll be repainting next year. I don't rush.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta section">
        <div className="cta-background"></div>
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="fade-in">Let's Look At Your Boat</h2>
            <p className="lead fade-in">
              Free quotes, honest advice about what needs doing. Call me and we'll sort it.
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

export default MarineServices;