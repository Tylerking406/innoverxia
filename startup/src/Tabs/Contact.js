import emailjs from '@emailjs/browser';
import { default as React, useRef } from 'react';
import './contact.css';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cq17t1r', 'template_9sm9fu7', form.current, {
        publicKey: 'GOfIQoCq4XhU6VrS3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <div className="contact-container">
      <h2>Contact <span className="highlight">Innovexia</span></h2>
      <p>
        Let's work together to innovate and create amazing solutions. Reach out to us through the details below or send us a message.
      </p>

      {/* Contact Cards */}
      <div className="contact-cards">
        {/* Arinao's Contact Card */}
        <div className="contact-card">
          <h3>
            <i className="fas fa-user"></i> Arinao Ndou
          </h3>
          <p>Co-Founder</p>
          <p>
            <i className="fas fa-envelope"></i> Email: <a href="mailto:tylerking406@gmail.com">tylerking406@gmail.com</a>
          </p>
          <p>
            <i className="fas fa-phone-alt"></i> Phone: <a href="tel:+27794405311">+27 79 440 5311</a>
          </p>
          <p>
            <i className="fab fa-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/arinao-ndou" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/arinao-ndou
            </a>
          </p>
          <p>
            <i className="fas fa-building"></i> Associated with: <a href="https://www.linkedin.com/company/tata-imali-169/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              Tata-iMali
            </a>
          </p>
        </div>

        {/* Thimna's Contact Card */}
        <div className="contact-card">
          <h3>
            <i className="fas fa-user"></i> Thimna Shushu
          </h3>
          <p>Co-Founder</p>
          <p>
            <i className="fas fa-envelope"></i> Email: <a href="mailto:thimnashushu@gmail.com">thimnashushu@gmail.com</a>
          </p>
          <p>
            <i className="fas fa-phone-alt"></i> Phone: <a href="tel:+27828647297">+27 82 864 7297</a>
          </p>
          <p>
            <i className="fab fa-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/thimna-shushu" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/thimna-shushu
            </a>
          </p>
          <p>
            <i className="fas fa-graduation-cap"></i> Associated with: <a href="https://www.shecodes.io/graduates/90238-thimna-shushu" target="_blank" rel="noopener noreferrer">
              SheCodes Graduate Profile
            </a>
          </p>
        </div>
      </div>

      {/* Message Form */}
      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your full name" aria-label="Enter your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email address" aria-label="Enter your email address" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Enter your message" aria-label="Enter your message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
