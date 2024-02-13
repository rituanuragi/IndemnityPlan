// Page1.js
import React from 'react';
import './Page1.css'; // Ensure the CSS file is updated to reflect new styles
import pic1 from './pic1.png';


const FeatureCard = ({ text }) => {
  return (
    <div className="feature-card">
      <span className="checkmark">✓</span>
      <span className="feature-text">{text}</span>
    </div>
  );
};

function Page1() {
  return (
    <div className="container">
     
      <div className="image-section">
        <img src={pic1} alt="Medical Professionals" className="responsive-image" />
        
        <h2>Safeguarding Medical Professionals</h2>

        <div className="benefits">
          <FeatureCard text="Covers cost of lawyer’s" />
          <FeatureCard text="Claim court awarded damages" />
          <FeatureCard text="Experienced Medico-Legal panel" />
          <FeatureCard text="Covers pre litigation cost" />
        </div>
      </div>
      <div className="form-section">
     
        <div className="form-container">
          
          <h2>CONNECT WITH US</h2>
          <form>
            <input type="text" placeholder="Name*" />
            <input type="text" placeholder="Mobile Number*" />
            <input type="email" placeholder="Email*" />
            <input type="text" placeholder="Preferred type*" />
            <button type="submit">GET STARTED</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page1;
