// AboutUsPage.js
import React from 'react';
import './AboutUs.css';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <br/>
      <h1 className='pgname'>About Us</h1>
      <br/>
      {/* Team Members */}
      <div className="team-members">
      <br/>
      <div className="box">
      
      </div>
        
        <br />
        <br />
        <br />
        <div className="white-3d-background">
        <h3>Welcome to Unity Mart, your premier destination for bulk purchasing and selling. At Unity Mart, we specialize in providing a seamless platform for businesses and individuals to engage in large-scale transactions. Our marketplace is designed to unite buyers and sellers, fostering a community built on trust, reliability, and efficiency.</h3>
        <br />
        <br />
        <h3>Explore an extensive range of products available in bulk quantities, ensuring cost-effectiveness and convenience for your purchasing needs. Whether you're a supplier looking to reach a broader audience or a buyer seeking competitive prices, Unity Mart offers a unified space to facilitate successful transactions.</h3>
        <br />
        <br />
        <h3>Discover the power of bulk buying and selling as Unity Mart connects businesses, streamlining processes and opening doors to new opportunities. Join us on a journey of unity, where convenience meets commerce, and together, we build a marketplace that empowers success.</h3>
        </div>
        <br />
        <br />
        <h2>Our Team</h2>
        <div className="team-member-cards">
          <div className="team-member-card">
            <img className="img1" src="../src/images/Niketh.jpeg" alt="User Profile Picture" />
            <div className="details">
              <h3>Niketh Randil Weragala</h3>
              <p><strong>Role: Developer</strong></p>
              <p>Computer Science undergraduate student at university of westminster.</p>
            </div>
          </div>
          <div className="team-member-card">
            <img className="img1" src="../src/images/Kavith.jpeg" alt="User Profile Picture" />
            <div className="details">
              <h3>Kavith Fernando</h3>
              <p><strong>Role: Developer</strong></p>
              <p>Computer Science undergraduate student at university of westminster.</p>
            </div>
          </div>
          <div className="team-member-card">
            <img className="img1" src="../src/images/Pabasara.jpeg" alt="User Profile Picture" />
            <div className="details">
              <h3>Pabasara Ravindaka</h3>
              <p><strong>Role: Developer</strong></p>
              <p>Computer Science undergraduate student at university of westminster.</p>
            </div>
          </div>
          <div className="team-member-card">
            <img className="img1" src="../src/images/Sanjaya.jpeg" alt="User Profile Picture" />
            <div className="details">
              <h3>Sanjaya Perera</h3>
              <p><strong>Role: Developer</strong></p>
              <p>Computer Science undergraduate student at university of westminster.</p>
            </div>
          </div>
          <div className="team-member-card">
            <img className="img1" src="../src/images/Subhavitha.jpeg" alt="User Profile Picture" />
            <div className="details">
              <h3>Susitha Subhavitha</h3>
              <p><strong>Role: Developer</strong></p>
              <p>Computer Science undergraduate student at university of westminster.</p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => Navigate("ContactUs")}>Contact Us</button>
    </div>
  );
};

export default AboutUsPage;
