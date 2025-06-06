import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Do you work weekends?",
      answer: "Yes, we offer flexible scheduling including weekends and evenings, especially for commercial projects where minimal business disruption is essential."
    },
    {
      question: "Do I need to prep anything before you arrive?",
      answer: "We handle all preparation work including furniture protection, surface cleaning, and masking. You don't need to do anything except provide access to the work areas."
    },
    {
      question: "How long does marine anti-foul take?",
      answer: "Typically 1-3 days depending on the size of your vessel. This includes hull cleaning, preparation, primer application, and anti-foul coating with proper drying time between coats."
    },
    {
      question: "What's included in your 3-year guarantee?",
      answer: "Our guarantee covers all materials and workmanship against defects, peeling, or premature wear under normal conditions. We'll return to fix any issues at no additional cost."
    },
    {
      question: "Can you work around my business hours?",
      answer: "Absolutely. We specialise in out-of-hours commercial work, including evenings, weekends, and holidays to ensure zero disruption to your business operations."
    },
    {
      question: "What types of paint do you use?",
      answer: "We use only premium brands: marine-grade coatings from International and Awlgrip for boats, Farrow & Ball and Little Greene for homes, and commercial-grade systems for businesses."
    },
    {
      question: "How do you protect my furniture and belongings?",
      answer: "We use professional-grade protective sheeting, masking tape, and drop cloths. All furniture is carefully covered or moved, and we complete a thorough cleanup after each session."
    },
    {
      question: "Can you match existing colours?",
      answer: "Yes, we offer professional colour matching services. We can match any existing colour or help you choose complementary colours that enhance your space."
    },
    {
      question: "What if weather affects my exterior project?",
      answer: "We monitor weather conditions closely and will reschedule if necessary. Exterior work requires dry conditions and appropriate temperatures for optimal results."
    },
    {
      question: "Do you provide free quotes?",
      answer: "Yes, all quotes are completely free with no obligation. We'll visit your site, assess the work required, and provide a detailed written estimate."
    }
  ];

  return (
    <div className="faq-page">
      <section className="faq-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p className="lead">Everything you need to know about our painting services</p>
        </div>
      </section>

      <section className="faq-content">
        <div className="container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-question ${openItems.includes(index) ? 'active' : ''}`}
                  onClick={() => toggleItem(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openItems.includes(index) ? '−' : '+'}</span>
                </button>
                <div className={`faq-answer ${openItems.includes(index) ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-contact section" style={{backgroundColor: 'var(--light-neutral)'}}>
        <div className="container">
          <div className="contact-prompt">
            <h2>Still have questions?</h2>
            <p>We're here to help! Get in touch for personalised answers to your specific project needs.</p>
            <div className="contact-options">
              <a href="tel:07453817030" className="btn btn-primary">Call 07453 817030</a>
              <a href="mailto:info@boatlifecreatives.co.uk" className="btn btn-secondary">Email Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;