import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      project: "Yacht Hull Refinishing",
      rating: 5,
      text: "Absolutely exceptional work on our yacht. The attention to detail was incredible and the finish is flawless. Boat Life Creatives truly understands marine painting.",
      image: "/images/marine/20250605_2207_Yacht Hull Refinishing_simple_compose_01jx0f5barefj8db6kg1mg1dqf.png"
    },
    {
      name: "David Martinez",
      project: "Home Interior Renovation",
      rating: 5,
      text: "Transformed our entire home with their creative approach. Professional, clean, and the results exceeded our expectations. Highly recommended!",
      image: "/images/residential/20250605_2203_Freshly Painted Spaces_simple_compose_01jx0eybf2e56ahkyqhj27f4ae.png"
    },
    {
      name: "Emma Thompson",
      project: "Office Modernisation",
      rating: 5,
      text: "They completed our office renovation over a weekend with zero disruption to our business. The space looks amazing and our team loves the new environment.",
      image: "/images/commercial/20250606_1639_Sleek Modern Office_simple_compose_01jx2ew9v0e9f8bk7cbqfbmz8q.png"
    },
    {
      name: "Michael Roberts",
      project: "Residential Feature Wall",
      rating: 5,
      text: "The feature wall they created in our living room is a work of art. Their creative vision and technical skill are unmatched.",
      image: "/images/residential/20250606_1638_Freshly Painted Interiors_simple_compose_01jx2eq5a8f28ryq8v2s832b32.png"
    }
  ];

  return (
    <div className="testimonials-page">
      <section className="testimonials-hero">
        <div className="container">
          <h1>What Our Clients Say</h1>
          <p className="lead">Real feedback from real clients who experienced the Boat Life Creatives difference</p>
        </div>
      </section>

      <section className="testimonials-content">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card fade-in">
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.project} className="zoom-image" />
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

      <section className="testimonials-stats section" style={{backgroundColor: 'var(--light-neutral)'}}>
        <div className="container">
          <h2 className="section-title">Our Track Record</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3 Years</div>
              <div className="stat-label">Guarantee Period</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24hr</div>
              <div className="stat-label">Response Time</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;