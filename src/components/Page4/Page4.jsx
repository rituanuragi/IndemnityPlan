import React from 'react';
import './Page4.css'; // Make sure the CSS file is in the same directory
import pic4 from './pic4.png'; // Path to your first image
import pic5 from './pic5.png'; // Path to your second image

const GuaranteePage = () => {
  return (
    <div className="credit-flex">
      <div className="credit-flex-content1">
        <div className="credit-flex-leftimage">
          <img src={pic4} alt="Increase Credit" />
          <h3 className='highlight1'>Doctor’s Professional Indemnity Insurance
         </h3>
          <ul className='highlight2'>
            <li>Professional Indemnity Insurance provides financial coverage to doctor’s offering services or consultations to their customers.
          </li>
            <li>Doctors & Medical Practitioners professionals who should purchase this insurance policy.</li>
          </ul>
        </div>
        <div className="credit-flex-rightimage">
          <h3 className='highlight1' >Benefits of Professional Indemnity Insurance
       </h3>
          <ul className='highlight2'>
            <li>This insurance covers legal liabilities arising out of errors, omissions and negligence while providing any service that causes injury & any loss occur to the 3rd party.
          </li>
           
            <li>This insurance covers expenses incurred during legal proceedings including lawyer’s fees, court-awarded damages, Covers pre litigation cost . However, this coverage is limited within the Indian Territory..</li>
          </ul>
          <img src={pic5} alt="Reduce EMI Costs" />
        </div>
      </div>
    </div>
  );
};

export default GuaranteePage;
