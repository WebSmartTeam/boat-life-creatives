import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="grid grid-2">
            <div className="about-content">
              <h1 className="fade-in">Crafting Exceptional Spaces with Creative Excellence</h1>
              <p className="lead fade-in">
                At Boat Life Creatives, we're more than painters—we're creative professionals who understand that every surface tells a story and every space deserves to be extraordinary.
              </p>
              <p className="fade-in">
                Founded on the principle that painting is an art form, not just a trade, we bring a design-forward approach to every project, whether it's a luxury yacht, your family home, or a bustling commercial space.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="/images/team/20250606_1640_Team of Painters_simple_compose_01jx2etg5pfzab41pe1zvbs8c5.png"
                alt="Our professional painting team"
                className="image-full-width"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story section">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="story-content">
            <p>
              What started as a passion for marine restoration has evolved into a comprehensive painting service that serves discerning clients across marine, residential, and commercial sectors. We believe exceptional spaces are created through attention to detail, creative vision, and unwavering professionalism.
            </p>
            <p>
              Our unique approach combines traditional craftsmanship with modern techniques, always delivered with the reliability and cleanliness that busy professionals and boat owners demand.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values section" style={{backgroundColor: 'var(--light-neutral)'}}>
        <div className="container">
          <h2 className="section-title">What Drives Us</h2>
          <div className="values-grid grid grid-3">
            <div className="value-card fade-in">
              <div className="value-icon">🎨</div>
              <h3>Creative Excellence</h3>
              <p>We approach every project as a creative opportunity, bringing fresh perspectives and innovative solutions to traditional painting challenges.</p>
            </div>
            <div className="value-card fade-in">
              <div className="value-icon">⏰</div>
              <h3>Reliability & Punctuality</h3>
              <p>Your time is valuable. We arrive when promised, complete work on schedule, and respect your space throughout the entire process.</p>
            </div>
            <div className="value-card fade-in">
              <div className="value-icon">🧽</div>
              <h3>Clean & Professional</h3>
              <p>Immaculate work practices and complete site cleanup mean you can focus on enjoying your newly transformed space.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team section">
        <div className="container">
          <h2 className="section-title">Meet Our Craftspeople</h2>
          <div className="team-grid grid grid-2">
            <div className="team-member fade-in">
              <div className="team-image">
                <img 
                  src="/images/team/20250605_2205_Professional Wall Painter_simple_compose_01jx0f33dbftp8ya4jpx85wrq8.png"
                  alt="Master craftsperson at work"
                />
              </div>
              <div className="team-content">
                <h3>Our Master Craftspeople</h3>
                <p>Every member of our team brings years of experience and a passion for quality. We're not just skilled painters—we're problem solvers, artists, and professionals who take pride in transforming your vision into reality.</p>
              </div>
            </div>
            <div className="team-member fade-in">
              <div className="team-image">
                <img 
                  src="/images/team/20250605_2212_Craftsmen in Action_simple_compose_01jx0ffa8zeq2ajpq0g4cbazsk.png"
                  alt="Team collaboration in action"
                />
              </div>
              <div className="team-content">
                <h3>Collaborative Approach</h3>
                <p>We work closely with you throughout every stage, from initial consultation to final reveal. Your input shapes our work, ensuring the end result exceeds your expectations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-steps grid grid-3">
            <div className="process-step fade-in">
              <div className="step-number">01</div>
              <h3>Consultation & Vision</h3>
              <p>We begin with understanding your space, your needs, and your vision. Every project starts with listening.</p>
            </div>
            <div className="process-step fade-in">
              <div className="step-number">02</div>
              <h3>Professional Execution</h3>
              <p>Meticulous preparation, premium materials, and expert application ensure flawless results that last.</p>
            </div>
            <div className="process-step fade-in">
              <div className="step-number">03</div>
              <h3>Perfect Finish</h3>
              <p>Complete cleanup, final inspection, and your satisfaction guaranteed. We're not finished until you're delighted.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta section-large">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Transformation?</h2>
            <p>Let's discuss your project and create something extraordinary together.</p>
            <div className="cta-actions">
              <Link to="/booking" className="btn btn-primary">Book Site Visit</Link>
              <Link to="/gallery" className="btn btn-secondary">View Our Work</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;