import React from 'react';
import './service.css'; // Add a CSS file for styling

const Services = () => {
  return (
    <div className="serviceContent">
      <h2>
        Let me introduce <span className="highlight">Innovexia</span>
      </h2>
      <p>
        At Innovexia, we specialize in delivering innovative solutions that
        drive your business forward. Our services are designed to cater to a
        wide range of business needs, ensuring quality, creativity, and
        efficiency.
      </p>

      {/* Services Section */}
      <div className="services-list">
        {/* Service Card 1 */}
        <div className="service-card">
          <div className="icon">
            <i className="fas fa-laptop-code"></i>
          </div>
          <h3>Web Design and Hosting</h3>
          <p>
            Professional website design and reliable hosting solutions tailored
            to meet your business needs. From stunning visuals to fast-loading
            pages, we’ve got you covered.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="service-card">
          <div className="icon">
            <i className="fas fa-cogs"></i>
          </div>
          <h3>Systems Design and Analysis</h3>
          <p>
            Custom systems to streamline your business processes. We analyze
            and optimize your existing systems for efficiency and scalability.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="service-card">
          <div className="icon">
            <i className="fas fa-pencil-ruler"></i>
          </div>
          <h3>UX/UI Design</h3>
          <p>
            Creating user-centric designs to ensure a seamless and enjoyable
            experience for your customers. From wireframes to interactive
            prototypes, we bring your ideas to life.
          </p>
        </div>

        {/* Service Card 4 */}
        <div className="service-card">
          <div className="icon">
            <i className="fas fa-users"></i>
          </div>
          <h3>Customer Engagement Platforms</h3>
          <p>
            Develop tools that boost customer interaction, such as chatbots,
            loyalty programs, and email marketing systems to enhance retention.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
