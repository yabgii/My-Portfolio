import React, { useState } from "react";
import "../styles/contact.css";
import emailjs from "@emailjs/browser";

import contactImage from "../assets/contacts.svg"; // Import the image
function Contact() {
  const [formData, setFormData] = useState({
    to_name: "",
    from_name: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS credentials
    const serviceID = "service_ig83daq"; // Service ID as a string
    const templateID = "template_didb457"; // Template ID as a string
    const publicKey = "JrVOhKIRl4DRxAYfF"; // Public Key as a string

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus(alert("Thank you! Your message has been sent."));
        setFormData({ to_name: "", from_name: "", message: "" }); // Reset form
      },
      (error) => {
        console.error("FAILED...", error);
        setStatus(alert("Oops! Something went wrong. Please try again."));
      }
    );
  };
  return (
    <div className="contact-container" id="cont">
      <h2>Contact Me?</h2>
      <hr />
      <p className="contact-description">
        I’d love to hear from you! Fill out the form below, and I’ll get back to
        you as soon as possible.
      </p>

      <div className="contact-content">
        <div className="contact-image-container">
          <img
            src={contactImage}
            alt="contact illustration"
            className="contact-image"
          />
        </div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="to_name"
              placeholder="Your Name"
              value={formData.to_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="from_name"
              placeholder="Your Email"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="contact-btn">
              Send
            </button>
          </form>
        </div>
      </div>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
}

export default Contact;
