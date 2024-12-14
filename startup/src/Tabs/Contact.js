import emailjs from '@emailjs/browser';
import { default as React, useState } from 'react';
import './contact.css';


const Contact = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [notification, setNotification] = useState(null);

const handleSubmit = (e) => {
  e.preventDefault();


  //Email details
  const serviceId = "service_cq17t1r";
  const templateId = "template_9sm9fu7";
  const publicKey = "GOfIQoCq4XhU6VrS3";

  
  //an object that contains dynamic template parameters
  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: "Innoverxia",
    message: message,
  };


  // Send the email using emailJS
  emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setNotification({ type: 'success', message: 'Message sent successfully!' });
      setName('');
      setEmail('');
      setMessage('');
    },
    (error) => {
      console.log('FAILED...', error);
      setNotification({ type: 'error', message: 'Failed to send the message. Please try again later.' });
    },
  );
}

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


      {/* Notification Section */}
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      {/* Message Form */}
      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text"
              placeholder="Enter your full name"
              value={name} 
              onChange={(e) => setName(e.target.value)}
              aria-label="Enter your full name" required
              />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                placeholder="Enter your email address"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Enter your email address" required
                 />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              rows="5" 
              placeholder="Enter your message"
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              aria-label="Enter your message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
