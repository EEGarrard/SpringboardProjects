import { useState } from 'react';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the meaning of life?",
      answer: "42 (According to The Hitchhiker's Guide to the Galaxy)"
    },
    {
      question: "How do I contact support?",
      answer: "Use our contact form or email support@example.com"
    },
    {
      question: "Is there a mobile app?",
      answer: "Yes, our app is available on both iOS and Android platforms"
    },
    {
      question: "What are your business hours?",
      answer: "Monday to Friday, 9 AM to 5 PM (GMT)"
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-card">
        <h3 className="faq-title">Frequently Asked Questions</h3>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                {faq.question}
                <span className="faq-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}