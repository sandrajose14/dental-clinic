import React, { useEffect, useState } from 'react';
import './viewbooking.css';
import { Link } from 'react-router-dom';
import { deleteBookingApi, getbookingApi } from '../services/callApi';

function ViewBooking() {
  const userEmail = sessionStorage.getItem('userEmail'); // Retrieve userEmail from sessionStorage

  const [userAppointments, setUserAppointments] = useState([]);

  useEffect(() => {
    if (userEmail) {
      fetchAppointments();
    }
  }, [userEmail]);

  const fetchAppointments = async () => {
    try {
      const response = await getbookingApi();
      const { data } = response;
      console.log('Fetched appointments:', data); // Debugging statement
      // Filter appointments by user's email
      const filteredAppointments = data.filter(appointment => appointment.userEmail === userEmail);
      console.log('Filtered appointments:', filteredAppointments); // Debugging statement
      setUserAppointments(filteredAppointments);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBookingApi(id);
      fetchAppointments(); // Refresh appointments after deletion
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  return (
    <div className="container-fluid view-booking-container">
      <h2 className="text-center mb-4 mt-3 fw-bold">View Appointments</h2>
      {userAppointments.length > 0 ? (
        <div className="table-responsive ms-4">
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th>#</th>
                <th>Patient Name</th>
                <th>Doctor</th>
                <th>Treatment</th>
                <th>Date</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userAppointments.map((appointment, index) => (
                <tr key={appointment.id}>
                  <td>{index + 1}</td>
                  <td>{appointment.pname}</td>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.treatment}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>
                    <button onClick={() => handleDelete(appointment.id)} className="btn btn-danger ms-2">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h1>No Appointments</h1>
          <Link to={'/'}>
            <button className="btn btn-success mb-3">Go to Home</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ViewBooking;
