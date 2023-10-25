import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <>
      <div className="contact">
        <div className="form-header">
          <h1>We want to hear from you</h1>
          <p>Have any questions or suggestions?</p>
          <span>Reach out to us</span>
        </div>

        <form action="" method="post" className="formWrapper">
          <div className="fullName">
            <div className="form-group">
              <label for="fname">First Name</label>
              <input type="text" name="fname" id="fname" required />
            </div>
            <div className="form-group">
              <label for="lname">Last Name</label>
              <input type="text" name="lname" id="lname" required />
            </div>
          </div>
          <div className="form-group email-input">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="companyDetails">
            <div className="form-group">
              <label for="cname">Company Name</label>
              <input type="text" name="cname" id="cname" />
            </div>
            <div className="form-group">
              <label for="phone">Phone</label>
              <input type="text" name="phone" id="phone" />
            </div>
          </div>

          <div className="form-group">
            <label for="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="message-input"
              rows="50"
              required
            ></textarea>
          </div>

          <button className="btn btn-submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
