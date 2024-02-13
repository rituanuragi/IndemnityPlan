import React from 'react';
import './Page5.css'; // Assuming that Page3 will also use Page2's styles
import pic7 from './pic7.jpeg'; // Ensure the path to your image is correct

const Page5 = () => (
  <div className="page-container1">
    <img src={pic7} alt="Feature" className="feature-image1"/>
  </div>
);

export default Page5;
