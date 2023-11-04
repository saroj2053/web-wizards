import React from "react";
import contactStyles from "./Contact.module.css";
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className={contactStyles.contact} name="contact">
      <div className="container">
        <h2 className={contactStyles.contact__heading}>Contact Us</h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
