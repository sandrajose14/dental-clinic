// Treatment.js
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bonding from '../assets/bonding.jpg';
import root from '../assets/root.jpg';
import toothcleaning from '../assets/clean.jpg';
import implants from '../assets/implant.jpg';
import cosmetic from '../assets/cosmetic.jpg';
import others from '../assets/others.jpg';

const Treatment = () => {
  const [treatments] = useState([
    { name: 'Dental Bonding', image: bonding },
    { name: 'Root Canal Treatment', image: root },
    { name: 'Tooth Cleaning', image: toothcleaning },
    { name: 'Dental Implants', image: implants },
    { name: 'Cosmetic Dentistry', image: cosmetic },
    { name: 'Other Treatments', image: others },
  ]);

  return (
    <div className="container mt-5">
      <h5 className='text-primary fw-bold'>HERE IS OUR SERVICES DETAILS...</h5>
      <h1 className="text-center mb-4 text-primary fw-bold">Dental Treatments</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {treatments.map((treatment, index) => (
          <div key={index} className="col mb-4">
            <div className="card border rounded shadow">
              <img src={treatment.image} className="card-img-top shadow" style={{width:'250px',height:'250px'}} />
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title fw-bold fs-5">{treatment.name}</h5>
                <Link to={`/treatment/doctor/${encodeURIComponent(treatment.name)}`}>
                  <Button  className="btn btn-primary mt-2">Book Now</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Treatment;
