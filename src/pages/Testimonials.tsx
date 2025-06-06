import { Link } from 'react-router-dom';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah J.",
      project: "Yacht Hull Work",
      rating: 5,
      text: "Amazing job on our boat. He knows what he's doing and the finish is perfect. Would definitely use again.",
      image: "/images/marine/20250605_2207_Yacht Hull Refinishing_simple_compose_01jx0f5barefj8db6kg1mg1dqf.png"
    },
    {
      name: "David M.",
      project: "Full House Repaint",
      rating: 5,
      text: "Turned up on time every day, did a quality job, cleaned up properly. Can't ask for more than that.",
      image: "/images/residential/20250605_2203_Freshly Painted Spaces_simple_compose_01jx0eybf2e56ahkyqhj27f4ae.png"
    },
    {
      name: "Emma T.",
      project: "Shop Refresh",
      rating: 5,
      text: "Did the whole job over a weekend. Shop looked brilliant Monday morning and we didn't lose any trading time.",
      image: "/images/commercial/20250606_1639_Sleek Modern Office_simple_compose_01jx2ew9v0e9f8bk7cbqfbmz8q.png"
    },
    {
      name: "Michael R.",
      project: "Living Room Feature Wall",
      rating: 5,
      text: "The wife wanted something special for the living room. He listened, suggested a colour, and it looks fantastic.",
      image: "/images/residential/20250606_1638_Freshly Painted Interiors_simple_compose_01jx2eq5a8f28ryq8v2s832b32.png"
    },
    {
      name: "James K.",
      project: "Boat Anti-Foul",
      rating: 5,
      text: "Been using him for anti-foul for 3 years. Always books me in on time, does it properly. Reliable as clockwork.",
      image: "/images/marine/20250605_2207_Yacht Hull Refinishing_simple_compose_01jx0f5bate4db61w6mqvjymv9.png"
    },
    {
      name: "Lisa P.",
      project: "Kitchen & Hallway",
      rating: 5,
      text: "Really tidy worker. Protected everything, no mess, brilliant finish. Would recommend to anyone.",
      image: "/images/residential/20250605_2203_Freshly Painted Spaces_simple_compose_01jx0eybf3f6vtaekphaggg9jb.png"
    }
  ];

  return (
    <div className="testimonials-page">
      <section className="testimonials-hero">
        <div className="paint-splash-accent">
          <img src="/client-images/paint splash.png" alt="" />
        </div>
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="fade-in">What People Say</h1>
            <p className="lead fade-in">Real feedback from real customers - no made-up reviews here</p>
          </div>
        </div>
      </section>

      <section className="testimonials-content section">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card card fade-in">
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.project} />
                </div>
                <div className="testimonial-content">
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                  <blockquote>"{testimonial.text}"</blockquote>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-stats section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="fade-in">15 Years In Numbers</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-item card fade-in">
              <div className="stat-number">15</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item card fade-in">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Jobs Completed</div>
            </div>
            <div className="stat-item card fade-in">
              <div className="stat-number">100%</div>
              <div className="stat-label">Turn Up On Time</div>
            </div>
            <div className="stat-item card fade-in">
              <div className="stat-number">0</div>
              <div className="stat-label">Complaints This Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="cta-background"></div>
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="fade-in">Want To Add Your Review?</h2>
            <p className="lead fade-in">
              Get the job done first - then tell others what you think.
            </p>
            <div className="cta-actions fade-in">
              <a href="tel:07453817030" className="btn btn-large btn-white">
                📞 Call: 07453 817030
              </a>
              <Link to="/booking" className="btn btn-large btn-outline-white">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;