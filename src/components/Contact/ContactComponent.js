import React, { useState } from "react";
import emailjs from 'emailjs-com';
import './ContactComponentStyles.scss'

const Contact = () => {
  const [result, setResult] = useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n0qlx0j', 'template_rjj5nvb', e.target, 'iyLBYmZ4JQviHbSXM')
      .then((result) => {
          console.log(result.text);
          setResult(true);
          setTimeout(()=>{
            setResult(false);
          },3000);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Your name:</label>
          <input type="text" name="from_name" required />
          <label>Your email:</label>
          <input type="email" name="from_email" required />
          <label>Your message: </label>
          <textarea name="message" required />
          <input type="submit" value="Send" />
        </form>
        {result ? <p className="success-message">Your message has been sent!</p> : null}
      </div>
    </section>
  );
};

export default Contact;
