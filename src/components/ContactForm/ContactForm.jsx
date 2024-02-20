import React from "react";
import { useRef } from "react";
import "./ContactForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "",
  };
  const [formData, setFormData] = React.useState(initialState);
  const form = useRef();

  const setFieldData = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  const notify = () =>
    toast("We have got your response, We will contact you soon!");
  const notifyError = () =>
    toast("Sorry we couldn't submit your request, Please try again later");
  const addContactFormData = event => {
    try {
      event.preventDefault();
      emailjs
        .sendForm(
          "service_jglbeq8",
          "template_qq98a9b",
          form.current,
          "XywVJqryk1UPDnLO5"
        )
        .then(
          result => {
            notify();
          },
          error => {
            notifyError();
          }
        );
      setFormData(initialState);
      console.log("");
    } catch (err) {
      console.log("error creating form:", err);
    }
  };

  return (
    <>
      <form ref={form} className="contact" onSubmit={addContactFormData}>
        <div className="form-header">
          <h1>We want to hear from you</h1>
          <p>Have any questions or suggestions?</p>
          <span>Reach out to us</span>
        </div>

        <div className="formWrapper">
          <div className="form-group fullName-input">
            <label htmlFor="fname">Full Name</label>
            <input
              onChange={event => setFieldData("name", event.target.value)}
              value={formData.name}
              type="text"
              name="name"
              id="name"
              required
            />
          </div>

          <div className="form-group email-input">
            <label htmlFor="email">Email</label>
            <input
              onChange={event => setFieldData("email", event.target.value)}
              value={formData.email}
              type="email"
              name="email"
              id="email"
              required
            />
          </div>

          <div className="form-group company-name">
            <label htmlFor="cname">Company Name</label>
            <input
              onChange={event => setFieldData("company", event.target.value)}
              value={formData.company}
              type="text"
              name="company"
              id="company"
            />
          </div>
          <div className="form-group company-phone">
            <label htmlFor="phone">Phone</label>
            <input
              onChange={event => setFieldData("phone", event.target.value)}
              value={formData.phone}
              type="text"
              name="phone"
              id="phone"
            />
          </div>

          <div className="form-group message-input">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="message-input"
              rows="50"
              required
              value={formData.message}
              onChange={event => setFieldData("message", event.target.value)}
            ></textarea>
          </div>
          <button className="btn btn-submit">Submit</button>
          <ToastContainer />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
