import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homee from '../src/pages/Homee';
import Treatment from './pages/Treatment';
import Doctor from './pages/Doctors';
import Testimonial from './pages/Testimonial';
import Contactus from './pages/Contactus';
import Authentication from './components/Authentication';
import ViewBooking from './pages/ViewBooking';
import Profile from './pages/Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const loggedInStatus = sessionStorage.getItem('isLoggedIn');
    const storedUserEmail = sessionStorage.getItem('userEmail');
    if (loggedInStatus && storedUserEmail) {
      setIsLoggedIn(true);
      setUserEmail(storedUserEmail);
    }
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} userEmail={userEmail} />
      <Routes>
        <Route path='/' element={<Homee />} />
        <Route path='/treatment' element={<Treatment />} />
        <Route path='/treatment/doctor/:treatmentName' element={<Doctor />} />
       
        <Route path='/feedback' element={<Testimonial />} />
        <Route path='/contact' element={<Contactus />} />
        <Route
          path='/login'
          element={<Authentication setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} />}
        />
        <Route
          path='/register'
          element={<Authentication setIsLoggedIn={setIsLoggedIn} setUserEmail={setUserEmail} register />}
        />
        {isLoggedIn && (
          <>
            <Route path='/viewbooking' element={<ViewBooking userEmail={userEmail} />} />
            <Route path='/profile' element={<Profile />} />
          </>
        )}
        {!isLoggedIn && (
          <>
            <Route path='/viewbooking' element={<Navigate to='/login' />} />
            <Route path='/profile' element={<Navigate to='/login' />} />
          </>
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
