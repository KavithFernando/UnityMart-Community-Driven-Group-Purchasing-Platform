// AboutUsPage.js
import React from 'react';
import './AboutUs.css';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <h1>About Us</h1>
      {/* Team Members */}
      <div className="team-members">
        <h2>Our Team</h2>
        <div className="team-member-cards">
         
          <div className="team-member-card">
            <h3>Niketh Randil Weragala</h3>
            <p><strong>Role: Devoloper </strong></p>
            <p>Lorem ipsum dolor sit amet.</p>
          
          </div>
          <div className="team-member-card">
            <h3>Bla Bla </h3>
            <p><strong>Role:</strong> CTO</p>
            <p>Lorem ipsum dolor sit amet.</p>
           
          </div>
          <div className="team-member-card">
            <h3>Bla</h3>
            <p><strong>Role:</strong> CEO</p>
            <p>Lorem ipsum dolor sit amet.</p>
           
          </div>
          <div className="team-member-card">
            <h3>Bla</h3>
            <p><strong>Role:</strong> CTO</p>
            <p>Lorem ipsum dolor sit amet.</p>
           
          </div>
          <div className="team-member-card">
            <h3>Bla</h3>
            <p><strong>Role:</strong> CTO</p>
            <p>Lorem ipsum dolor sit amet.</p>
           
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
