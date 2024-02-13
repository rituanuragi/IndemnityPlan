import React from 'react';
import './Page3.css'; // Assuming that Page3 will also use Page2's styles
import pic3 from './pic3.jpeg'; // Ensure the path to your image is correct

const Page3 = () => (
  <div className="page-container1">
    <h2 className="heading2">F2 Assistant</h2>
    <img src={pic3} alt="Feature" className="feature-image1"/>
  </div>
);

export default Page3;
