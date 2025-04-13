import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "What kind of activities does OneThrive offer?",
    answer: "We offer team-building games, wellness programs, creative workshops, offsite retreats, CSR initiatives, and more.",
  },
  {
    question: "Are your programs suitable for remote teams?",
    answer: "Yes! We offer hybrid and fully-virtual activities tailored for distributed teams.",
  },
  {
    question: "Can you customize activities for our team size and goals?",
    answer: "Absolutely. We customize every experience to fit your team's size, preferences, and desired outcomes.",
  },
  {
    question: "Do you provide virtual activities?",
    answer:
      "Yes. We offer both in-person and virtual team-building and wellness sessions suited to your team’s preferences.",
  },
];

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqs.map((item, index) => (
        <div className="faq-item" key={index}>
          <div
            className="faq-question"
            onClick={() => toggleFAQ(index)}
          >
            {item.question}
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};
