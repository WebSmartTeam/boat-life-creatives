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
      answer: "Yes, especially for business jobs. I work around your schedule - evenings, weekends, whatever suits you."
    },
    {
      question: "Do I need to move furniture?",
      answer: "No, I'll move what needs moving and cover everything else. Dust sheets down, surfaces protected - you shouldn't find paint where it shouldn't be."
    },
    {
      question: "How long does anti-foul take?",
      answer: "Depends on the boat size, but usually 1-3 days. Clean the hull, prep it properly, apply the anti-foul with proper drying time between coats."
    },
    {
      question: "What guarantee do I get?",
      answer: "If the work fails because of something I did wrong, I'll come back and fix it. Fair materials, proper application - that's what you're paying for."
    },
    {
      question: "Can you work around my business?",
      answer: "Absolutely. I do lots of shops and offices overnight or weekends. You open Monday morning and everything's done."
    },
    {
      question: "What paint do you use?",
      answer: "Good stuff. International and Hempel for boats, Dulux and Crown for houses, whatever suits your budget. I'll advise what works best."
    },
    {
      question: "Will you make a mess?",
      answer: "I'm a tidy worker. Dust sheets down, everything protected, clean up as I go. You get your space back ready to use."
    },
    {
      question: "Can you match my existing colour?",
      answer: "Yes, I can match pretty much any colour. Or if you want something different, I'll help you pick something that works."
    },
    {
      question: "What about weather for outside work?",
      answer: "Can't paint in the rain or when it's too cold. I'll check the forecast and let you know if we need to move the dates."
    },
    {
      question: "How much do you charge for quotes?",
      answer: "Nothing. I'll come look at the job, tell you what needs doing, give you a fair price. No obligation."
    },
    {
      question: "How quickly can you start?",
      answer: "Usually within a week or two, sometimes sooner. Depends what I've got on. Emergency jobs I can often fit in quicker."
    },
    {
      question: "Do you clean your brushes in my sink?",
      answer: "No, I bring my own water container and clean up kit. Your sinks stay clean."
    }
  ];

  return (
    <div className="faq-page">
      <section className="faq-hero">
        <div className="paint-splash-accent">
          <img src="/client-images/paint splash.png" alt="" />
        </div>
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="fade-in">Common Questions</h1>
            <p className="lead fade-in">Things people usually ask me about painting work</p>
          </div>
        </div>
      </section>

      <section className="faq-content section">
        <div className="container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item card fade-in">
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

      <section className="cta section">
        <div className="cta-background"></div>
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="fade-in">Still Got Questions?</h2>
            <p className="lead fade-in">
              Just give me a call. Easier to explain things properly over the phone.
            </p>
            <div className="cta-actions fade-in">
              <a href="tel:07453817030" className="btn btn-large btn-white">
                📞 Call: 07453 817030
              </a>
              <a href="mailto:info@boatlifecreatives.co.uk" className="btn btn-large btn-outline-white">
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;