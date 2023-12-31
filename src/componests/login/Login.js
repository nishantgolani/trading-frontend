import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone_number: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (isSignUp) {
        // Registration API
        const response = await axios.post('https://api.arjuneye.com/register/', {
          phone_number: formData.phone_number,
          email: formData.email,
          username: formData.username,
        });
  
        if (response && response.data) {
          console.log(response.data['message']);
          alert(response.data['message']);
        } else {
          console.error('Response or data is undefined:', response.data);
          alert(response.data);
        }
      } else {
        // Login API
        const response = await axios.post('https://api.arjuneye.com/login/', {
          email: formData.email,
          password: formData.password,
        });
  
        if (response && response.data) {
          console.log(response.data);
          alert('Login successful!');
        } else {
          console.error('Response or data is undefined:', response);
          alert('Incorrect email or password. Please try again.');
        }
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.detail) {
        // Display a user-friendly error message
        alert('Error: ' + error.response.data.detail);
      } else {
        // Display a generic error message
        alert('An error occurred. Please try again later.');
      }
      console.error(error.response ? error.response.data : error.message);
    }
  };

  const toggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
      <div id="container-login" className={`container-fuild ${isSignUp ? 'sign-up' : 'sign-in'}`}>
        <div className="row" id="login-row">
          {/* SIGN UP */}
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <div className="form sign-up">
                <div className="input-group">
                  <i className="bx bxs-user" />
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-user" />
                  <input
                    type="phone_number"
                    name="phone_number"
                    placeholder="Phone Number"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bx-mail-send" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                {/* <div className="input-group">
                  <i className="bx bxs-lock-alt" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div> */}
                {/* {isSignUp && (
                  <div className="input-group">
                    <i className="bx bxs-lock-alt" />
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                  </div>
                )} */}
                <button onClick={handleSubmit}>{isSignUp ? 'Sign up' : 'Sign in'}</button>

                <p>
                  <span>{isSignUp ? 'Already have an account?' : "Don't have an account?"}</span>
                  <b onClick={toggle} className="pointer">
                    {isSignUp ? 'Sign in here' : 'Sign up here'}
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <div className="form sign-in">
                <div className="input-group">
                  <i className="bx bxs-user" />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <button onClick={handleSubmit}>Sign in</button>
                <p>
                  <b>Forgot password?</b>
                </p>
                <p>
                  <span>Don't have an account?</span>
                  <b onClick={toggle} className="pointer">
                    Sign up here
                  </b>
                </p>
              </div>
            </div>
            <div className="form-wrapper"></div>
          </div>
        </div>
        <div className="row content-row" id="login-row">
          <div className="col align-items-center flex-col">
            <div className="text sign-in">
              <h2>Welcome</h2>
            </div>
            <div className="img sign-in"></div>
          </div>
          <div className="col align-items-center flex-col">
            <div className="img sign-up"></div>
            <div className="text sign-up">
              <h2>Join with us</h2>
            </div>
          </div>
          {/* END SIGN UP CONTENT */}
        </div>
      </div>
    </>
  );
}

export default Login;
