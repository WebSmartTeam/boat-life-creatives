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
        <div className="container">
          <h1>Get Your Free Quote</h1>
          <p className="lead">Ready to transform your space? Contact us for a professional consultation and detailed quote.</p>
        </div>
      </section>

      <section className="booking-content">
        <div className="container">
          <div className="booking-grid">
            <div className="booking-form-section">
              <h2>Request a Quote</h2>
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
                  <label htmlFor="service">Service Type *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select a service...</option>
                    <option value="marine">Marine Painting</option>
                    <option value="residential">Residential Painting</option>
                    <option value="commercial">Commercial Painting</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="form-input"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-large submit-btn">
                  Get Free Quote
                </button>
              </form>
            </div>

            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <div className="contact-methods">
                <div className="contact-method">
                  <h4>📞 Phone</h4>
                  <p><a href="tel:07453817030">07453 817030</a></p>
                </div>
                
                <div className="contact-method">
                  <h4>📧 Email</h4>
                  <p><a href="mailto:info@boatlifecreatives.co.uk">info@boatlifecreatives.co.uk</a></p>
                </div>
                
                <div className="contact-method">
                  <h4>🌐 Website</h4>
                  <p><a href="https://www.boatlifecreatives.co.uk">www.boatlifecreatives.co.uk</a></p>
                </div>
              </div>

              <div className="booking-benefits">
                <h3>Why Choose Us?</h3>
                <ul>
                  <li>✅ Free, no-obligation quotes</li>
                  <li>✅ 3-year guarantee on all work</li>
                  <li>✅ Professional, reliable service</li>
                  <li>✅ Premium quality materials</li>
                  <li>✅ Flexible scheduling</li>
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