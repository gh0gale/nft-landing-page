import React from "react";
import { Faq } from "./FAQ";
import { ContactForm } from "./ContactForm";
import "./Support.css";

export const Support = () => {
  return (
    <section className="support">
      <div className="support-wrapper">
        <div className="support-box">
          <Faq />
        </div>
        <div className="support-box">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
