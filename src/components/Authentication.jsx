import { faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Authentication.css';
import { RegisterApi, loginApi } from '../services/callApi';

function Authentication({ setIsLoggedIn, setUserEmail }) {
  const [register, setRegister] = useState({
    userName: '',
    userEmail: '',
    userPassword: ''
  });

  const [login, setLogin] = useState({
    userEmail: '',
    userPassword: ''
  });

  const validateEmail = (email) => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValid.test(email);
  };

  const validatePassword = (password) => {
    const passwordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // At least 6 characters, 1 letter, and 1 number
    return passwordValid.test(password);
  };

  const handleRegister = async () => {
    const { userName, userEmail, userPassword } = register;
    if (!userName || !userEmail || !userPassword) {
      alert('Please fill out all the fields completely');
    } else if (!validateEmail(userEmail)) {
      alert('Please enter a valid email address');
    } else if (!validatePassword(userPassword)) {
      alert('Password must be at least 6 characters long and contain at least one letter and one number');
    } else {
      try {
        const response = await RegisterApi(register);
        if (response.status >= 200 && response.status < 300) {
          alert('Profile created successfully');
          window.location.href = '/login'; // Navigate to the login page
        } else {
          alert('Something went wrong');
        }
      } catch (error) {
        console.error('Error registering:', error);
        alert('Something went wrong');
      }
    }
  };

  const handleLogin = async () => {
    try {
      const response = await loginApi();
      if (response.status >= 200 && response.status < 300) {
        const users = response.data;
        const { userEmail, userPassword } = login;
        let validUser = false;

        for (let user of users) {
          if (user.userEmail === userEmail && user.userPassword === userPassword) {
            validUser = true;
            break;
          }
        }

        if (validUser) {
          alert('Logged in successfully');
          setIsLoggedIn(true); // Update the isLoggedIn state
          setUserEmail(userEmail);
          sessionStorage.setItem('isLoggedIn', true); // Store login state in sessionStorage
          sessionStorage.setItem('userEmail', userEmail); // Store user email in sessionStorage
          window.location.href = '/';
        } else {
          alert('Invalid credentials');
        }
      } else {
        console.error('Login API request failed with status:', response.status);
        alert('Failed to log in. Please try again later.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Something went wrong');
    }
  };

  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`loginContainer ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form loginForm">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="email"
                placeholder="Email"
                onChange={e => setLogin({ ...login, userEmail: e.target.value })}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="password"
                placeholder="Password"
                onChange={e => setLogin({ ...login, userPassword: e.target.value })}
              />
            </div>
            <button type="button" className="btn" onClick={handleLogin}>
              Sign In
            </button>
          </form>
          <form action="#" className="sign-up-form loginForm">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                onChange={e => setRegister({ ...register, userName: e.target.value })}
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="email"
                placeholder="Email"
                onChange={e => setRegister({ ...register, userEmail: e.target.value })}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="password"
                placeholder="Password"
                onChange={e => setRegister({ ...register, userPassword: e.target.value })}
              />
            </div>
            <button type="button" onClick={handleRegister} className="btn">
              Sign Up
            </button>
            <p className="social-text loginp">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className="my-auto mx-auto" />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} className="my-auto mx-auto" />
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className="loginh3">New here?</h3>
            <p className="loginp">
              A smile remains the most inexpensive gift I can bestow on anyone and yet its powers can vanquish kingdoms.
            </p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img
            src="https://www.pngall.com/wp-content/uploads/8/Male-Dentist-PNG.png"
            className="image"
            alt=""
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3 className="loginh3">One of us?</h3>
            <p className="loginp">
              Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.
            </p>
            <button onClick={handleSignInClick} className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img
            src="https://i.pinimg.com/originals/99/1e/1c/991e1cc50b7a0173ef3bb5f3e673dad8.png"
            className="image"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Authentication;
