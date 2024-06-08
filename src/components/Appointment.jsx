import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { bookingApi } from '../services/callApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Appointment({ show, handleClose, selectedDoctor, selectedTreatment }) {
  // State
  const [booking, setBooking] = useState({
    pname: "",
    date: "",
    time: "",
    description: "",
    userEmail:""
   // Include user email in state
  });

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 9; hour <= 19; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const hourStr = hour < 10 ? '0' + hour : hour.toString();
        const minuteStr = minute < 10 ? '0' + minute : minute.toString();

        // Construct the time string
        const time = `${hourStr}:${minuteStr}`;
        options.push(time);
      }
    }
    return options;
  };

  // Function to handle booking
  const handleBookNow = async () => {
    const { pname, date, time, description, userEmail } = booking; // Include userEmail

    // Check if required fields are filled
    if (!pname || !date || !time) {
      toast.warning('Please fill the form completely');
      return;
    }

    try {
      // Prepare booking data including treatment
      const bookingData = {
        pname,
        date,
        time,
        treatment: selectedTreatment,
        doctor: selectedDoctor.name,
        description,
        userEmail // Include userEmail in booking data
      };

      // Call booking API
      const response = await bookingApi(bookingData);

      if (response.status >= 200 && response.status < 300) {
        alert('Booking uploaded successfully')
        // Clear booking form
        setBooking({
          pname: "",
          date: "",
          time: "",
          description: "",
          userEmail:""
       
        });
        handleClose();
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error('Error occurred:', error);
      toast.error("Something went wrong");
    }
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return `${year}-${month}-${day}`;
  };

  const getDate30 = () => {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(futureDate.getDate() + 30);
    const year = futureDate.getFullYear();
    let month = futureDate.getMonth() + 1;
    let day = futureDate.getDate();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return `${year}-${month}-${day}`;
  };

  return (
    <Modal show={show} onHide={handleClose} size='lg' centered>
      <Modal.Header closeButton>
        <Modal.Title className='text-primary' style={{ fontWeight: "700" }}>Book an Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {selectedDoctor && (
                <>
                  <img src={selectedDoctor.image} width={'100%'} height={'auto'} alt='Doctor' />
                  <p className='mt-3 text-center fs-4 fw-bolder' style={{ textAlign: 'justify' }}>{selectedDoctor.name}</p>
                  <p className='text-center'>{selectedDoctor.specialty}</p>
                </>
              )}
            </div>
            <div className="col-md-6">
              <input
                type="text"
                placeholder='Name of Patient'
                className='form-control mb-3'
                onChange={(e) => setBooking({ ...booking, pname: e.target.value })}
              />
             <input
    type="text"
    placeholder='User Email (add login userEmail)' // Change the placeholder to indicate it's for user email
    className='form-control mb-3'
    onChange={(e) => setBooking({ ...booking, userEmail: e.target.value })}
  />
              <input
                type="date"
                placeholder='Date'
                max={getDate30()}
                min={getCurrentDate()}
                className='form-control mb-3'
                onChange={(e) => setBooking({ ...booking, date: e.target.value })}
              />
              <select
                className='form-control mb-3'
                value={booking.time}
                onChange={(e) => setBooking({ ...booking, time: e.target.value })}
              >
                <option value="">Select Time</option>
                {generateTimeOptions().map((option, index) => (
                  <option key={index} >{option}</option>
                ))}
              </select>
              <input
                type="text"
                value={selectedTreatment}
                className='form-control mb-3'
                readOnly
              />
              
              <textarea
                className='border grey rounded p-2'
                style={{ borderColor: 'grey', width: '100%', marginBottom: '10px' }}
                cols="47"
                rows="4"
                placeholder='Description (Optional)'
                onChange={(e) => setBooking({ ...booking, description: e.target.value })}
              ></textarea>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleBookNow}>
          Book Now
        </Button>
      </Modal.Footer>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </Modal>
  );
}

export default Appointment;
