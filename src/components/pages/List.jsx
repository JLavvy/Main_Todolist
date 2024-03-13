import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaGoogle, FaGithub } from 'react-icons/fa';
import './List.css';

export const List = () => {
  const [justifyActive, setJustifyActive] = useState('login-tab');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  return (
    <div className="container">

      <div className="tabs">
        <button
          onClick={() => handleJustifyClick('login-tab')}
          className={`tab-item ${justifyActive === 'login-tab' ? 'active' : ''}`}
        >
          Login
        </button>
        <button
          onClick={() => handleJustifyClick('register-tab')}
          className={`tab-item ${justifyActive === 'register-tab' ? 'active' : ''}`}
        >
          Register
        </button>
      </div>


      <div className="tabs-content">
        {justifyActive === 'login-tab' && (
          <div className="tab-pane">
            <h5 className="tab-text">Sign in with: </h5>
            <div className="social-login">

              <button className="icon-btn"><FaGoogle /></button>

            </div>
            <h5 className="tab-text">or: </h5>

           
            <div className="form">
             
              <div class="input-container ic2">
                <input id="email" class="input" type="email" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="email" class="placeholder">Email</label>
              </div>

              <div class="input-container ic2">
                <input id="password" class="input" type="password" placeholder=" " />
                <div class="cut cut-short1"></div>
                <label for="password" class="placeholder">Password</label>
              </div>
              
            </div>

            <div className="form-options">
              <label><input type="checkbox" /> Remember me</label>
              <a href="#!">Forgot password?</a>
            </div>

            <button className="submit-btn">Sign in</button>
            <p>Not a member? <a href="#!">Register</a></p>
          </div>
        )}

        {justifyActive === 'register-tab' && (
          <div className="tab-pane">
            <h5 className="tab-text">Sign in with: </h5>
            <div className="social-login">

              <button className="icon-btn"><FaGoogle /></button>

            </div>
            <h5 className="tab-text">or: </h5>


            <div className="form">
              <div class="input-container ic1">
                <input id="name" class="input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="name" class="placeholder">Name</label>
              </div>

              <div class="input-container ic2">
                <input id="username" class="input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="username" class="placeholder">Username</label>
              </div>

              <div class="input-container ic2">
                <input id="email" class="input" type="email" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="email" class="placeholder">Email</label>
              </div>

              <div class="input-container ic2">
                <input id="password" class="input" type="password" placeholder=" " />
                <div class="cut cut-short1"></div>
                <label for="password" class="placeholder">Password</label>
              </div>

            </div>

            <div className="form-options">
              <label><input type="checkbox" /> I agree to the terms</label>
            </div>

            <button className="submit-btn">Sign up</button>
          </div>
        )}
      </div>
    </div>
  );
};
