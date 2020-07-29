import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <h1 className="header">Contact Me</h1>
      <br />
      <form
        action="https://formspree.io/mdowyprz"
        method="POST"
        className="contact-form padd-15"
      >
        <div className="row">
          <div className="form-item col-6 padd-15">
            <div className="form-group left">
              <input
                type="text"
                className="form-control"
                placeholder="Name*"
                name="name"
              />
            </div>
          </div>
          <div className="form-item col-6 padd-15">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email*"
                name="email"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-item col-12 padd-15">
            <div className="form-group right">
              <input
                type="text"
                className="form-control"
                placeholder="Subject*"
                name="subject"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-item col-12 padd-15">
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Your Message..."
                name="message"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-item col-12 padd-15">
            <button type="submit" className="btn center">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
