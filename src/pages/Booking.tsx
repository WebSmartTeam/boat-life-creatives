import { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="booking-page">
      <section className="booking-hero">
        <div className="paint-splash-accent">
          <img src="/client-images/paint splash.png" alt="" />
        </div>
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="fade-in">Get A Quote</h1>
            <p className="lead fade-in">Give me a call or fill this in - I'll get back to you with a fair price, no obligation</p>
          </div>
        </div>
      </section>

      <section className="booking-content section">
        <div className="container">
          <div className="booking-grid">
            <div className="booking-form-section card">
              <h2>Tell Me About Your Job</h2>
              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">What Type of Job? *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">Choose one...</option>
                    <option value="marine">🛥️ Boat/Marine Work</option>
                    <option value="residential">🏠 House/Home Work</option>
                    <option value="commercial">🏢 Business/Shop Work</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell Me About The Job</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="form-input"
                    placeholder="What needs painting? How big? When do you want it done? Any other details..."
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-large submit-btn">
                  Send Me The Details
                </button>
              </form>
            </div>

            <div className="contact-info-section">
              <h2>Or Just Call Me</h2>
              <div className="contact-methods">
                <div className="contact-method card">
                  <h4>📞 Phone (Best Way)</h4>
                  <p><a href="tel:07453817030" className="phone-link">07453 817030</a></p>
                  <span className="contact-note">9am-6pm, 7 days</span>
                </div>
                
                <div className="contact-method card">
                  <h4>📧 Email</h4>
                  <p><a href="mailto:info@boatlifecreatives.co.uk">info@boatlifecreatives.co.uk</a></p>
                  <span className="contact-note">Usually reply same day</span>
                </div>
              </div>

              <div className="booking-benefits card">
                <h3>What You Get</h3>
                <ul>
                  <li>✅ Free quotes, no pressure</li>
                  <li>✅ Turn up when I say I will</li>
                  <li>✅ Fair prices, quality work</li>
                  <li>✅ Clean up after myself</li>
                  <li>✅ 15 years experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;