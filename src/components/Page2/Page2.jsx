import React from 'react';
import './Page2.css';
import pic2 from './pic2.jpeg'; // Ensure the path to your image is correct

const Page2 = () => (
  <div className="page-container">
    <div className="heading-container">
      <h2 className="heading">
        <span className="line line1">What makes F2 Fintech one of India's most</span><br />
        <span className="line line2">favorite place to buy Professional Indemnity</span><br />
        <span className="line line3">insurance?</span>
      </h2>
    </div>
    <img src={pic2} alt="Feature Description" className="feature-image"/>
    <div className="button-container">
      <button className="grab-now-button">Grab Now</button> {/* Button added here */}
    </div>
  </div>
 
);

export default Page2;
