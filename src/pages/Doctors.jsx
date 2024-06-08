// Doctors.js
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Appointment from '../components/Appointment'; 

function Doctors({userEmail}) {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const { treatmentName } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        // console.log(treatmentName);
    }, [treatmentName]);
    const handleShowModal = (doctor) => {
        // Check if user is logged in
        const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
      
        if (isLoggedIn) {
          setSelectedDoctor(doctor);
        } else {
          // Redirect to login page with a message
          alert('please login to book an appointment');
         navigate("/login")
        }
      };

    const handleCloseModal = () => {
        setSelectedDoctor(null);
    }

    const doctors = [
        {
            name: "Dr. Max Deo",
            experience: "Dentist (31 Years Exp.)",
            specialty: "BDS (Chief Dental Surgeon)",
            image: "https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg"
        },
       {
        name:"Dr.Maria Elizabeth",
        experience:"Dentist (11 Years Exp.)",
        specialty:"MDS - Orthodontics, Bachelor of Dental Surgery",
        image:"https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg"
       },
       {
        name:"Dr.James Alex",
        experience:"Dentist (17 Years Exp.)",
        specialty:"BDS, Diploma In Implantology",
        image:"https://st3.depositphotos.com/1001959/33942/i/450/depositphotos_339422454-stock-photo-portrait-of-young-attractive-medic.jpg"
       }
    ];

    return (
        <div>
            <h1 className='text-center text-primary mt-5 mb-4 fw-bold '>Doctors</h1>
            <div className="container mb-5">
            <h5 className='d-flex justify-content-center text-primary mb-3'>Treatment : <span className='text-warning fw-bold'>{treatmentName}</span>
    
</h5>

                <div className="row row-cols-1 row-cols-md-3 ">
                    {doctors.map((doctor, index) => (
                        <div className="col" key={index}>
                            <div className="card box4 shadow">
                                <img src={doctor.image} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{doctor.name}</h5>
                                    <p className="card-text">{doctor.experience}</p>
                                    <p className="card-text">{doctor.specialty}</p>
                                    <div style={{ width: '150px' }}>
                                        <Button onClick={() => handleShowModal(doctor)} className='btn btn-primary btn-sm form-control'>Book an Appointment</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedDoctor && <Appointment show={true} handleClose={handleCloseModal} selectedDoctor={selectedDoctor} selectedTreatment={treatmentName} userEmail={userEmail} />}

        </div>
    );
}

export default Doctors;
