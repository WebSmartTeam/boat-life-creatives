import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="paint-splash-accent">
          <img src="/client-images/paint splash.png" alt="" />
        </div>
        <div className="container">
          <div className="about-hero-grid">
            <div className="about-content">
              <div className="hero-badge fade-in">🛥️ 15 Years Marine & Property Expertise</div>
              <h1 className="fade-in">Just Me, My Brushes, And A Commitment To Quality</h1>
              <p className="lead fade-in">
                I'm a one-man business who's been painting boats and houses around the area for 15 years. 
                No fancy office, no big team - just reliable, quality work at fair prices.
              </p>
              <p className="fade-in">
                Started with boats at the marina, expanded to houses when people kept asking. 
                Same approach for both: turn up on time, do the job properly, leave it tidy.
              </p>
            </div>
            <div className="about-image fade-in">
              <div className="image-frame watercolor">
                <img 
                  src="/images/team/20250605_2205_Professional Wall Painter_simple_compose_01jx0f33dbftp8ya4jpx85wrq8.png"
                  alt="Professional painter at work"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="fade-in">How I Got Here</h2>
          </div>
          <div className="story-content">
            <p className="fade-in">
              Started painting boats 15 years ago because I loved being around the water and working with my hands. 
              Turns out I was good at it - really good. Word spread around the marina, then into town.
            </p>
            <p className="fade-in">
              Now I split my time between boats and houses. Same principles apply: proper prep work, quality materials, 
              attention to detail. Whether it's anti-fouling a hull or painting your living room, I treat every job 
              like it's my own.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="fade-in">What You Can Expect</h2>
            <p className="lead fade-in">Simple promises I've kept for 15 years</p>
          </div>
          <div className="values-grid grid grid-3">
            <div className="value-card card fade-in">
              <div className="value-icon">⏰</div>
              <h3>I Turn Up</h3>
              <p>Say Tuesday morning, I'm there Tuesday morning. No chasing, no excuses. Your time matters.</p>
            </div>
            <div className="value-card card fade-in">
              <div className="value-icon">🎨</div>
              <h3>I Know My Stuff</h3>
              <p>15 years means I know what works. Marine paints, house paints, the right kit for each job.</p>
            </div>
            <div className="value-card card fade-in">
              <div className="value-icon">🧹</div>
              <h3>I Clean Up</h3>
              <p>Dust sheets down, surfaces protected, everything tidied after. You shouldn't find paint where it shouldn't be.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="fade-in">What I Do Best</h2>
          </div>
          <div className="experience-grid grid grid-2">
            <div className="experience-item fade-in">
              <div className="experience-image">
                <div className="image-frame watercolor">
                  <img 
                    src="/images/marine/20250605_2207_Yacht Hull Refinishing_simple_compose_01jx0f5bavfm7tjnzchcfq5emv.png"
                    alt="Boat painting expertise"
                  />
                </div>
              </div>
              <div className="experience-content">
                <h3>Marine Specialist</h3>
                <p>15 years painting boats means I know marine paints inside out. Hull work, anti-fouling, varnish work - 
                   I understand what works in saltwater and what doesn't. Your boat's in safe hands.</p>
              </div>
            </div>
            <div className="experience-item fade-in">
              <div className="experience-image">
                <div className="image-frame watercolor">
                  <img 
                    src="/images/residential/20250606_1638_Freshly Painted Interiors_simple_compose_01jx2eq5a8f28ryq8v2s832b32.png"
                    alt="Residential painting expertise"
                  />
              </div>
              <div className="experience-content">
                <h3>Property Expert</h3>
                <p>From single feature walls to full house repaints, I bring the same attention to detail. 
                   Quality materials, proper prep, clean lines. Your home deserves the same care as any yacht.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="fade-in">How I Work</h2>
            <p className="lead fade-in">Same process every time, no surprises</p>
          </div>
          <div className="process-steps grid grid-3">
            <div className="process-step card fade-in">
              <div className="step-number">01</div>
              <h3>Free Quote</h3>
              <p>I'll come look at the job, explain what needs doing, give you a fair price. No obligation, no pressure.</p>
            </div>
            <div className="process-step card fade-in">
              <div className="step-number">02</div>
              <h3>Do The Work</h3>
              <p>Proper prep, quality materials, attention to detail. I don't cut corners - it's my name on the job.</p>
            </div>
            <div className="process-step card fade-in">
              <div className="step-number">03</div>
              <h3>Leave It Right</h3>
              <p>Job's not done until everything's cleaned up and you're happy. Any issues, I'll sort them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="cta-background"></div>
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="fade-in">Let's Talk About Your Project</h2>
            <p className="lead fade-in">
              Free quotes, honest advice, no pressure. Call me for a chat.
            </p>
            <div className="cta-actions fade-in">
              <a href="tel:07453817030" className="btn btn-large btn-white">
                📞 Call: 07453 817030
              </a>
              <Link to="/booking" className="btn btn-large btn-outline-white">
                Send Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;