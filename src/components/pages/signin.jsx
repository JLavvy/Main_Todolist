import React, { useEffect, useState } from 'react';
import './login.css';
import googleLogo from "/GoogleLogo.png";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth"
import { TodoList } from './TodoList';


export const Login = () => {
  const [justifyActive, setJustifyActive] = useState('login-tab');
  const [value, setValue] = useState('')

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem("email".data.user.email)
    })

    useEffect(() => {
      setValue(localStorage.getItem('email'))

    })
  }



  return (
    <div className="log-container">

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

            <div className="google-button">
              {value ? <TodoList /> :
                <button className="google-signin-btn" onClick={handleClick}>
                  <img src={googleLogo} alt="Google Icon" className="google-icon" />
                  Sign In with Google</button>

              }

            </div>
            <h5 className="tab-text">or: </h5>


            <div className="form">
              <div className="input-container ic2">
                <input id="email" className="log-input" type="email" placeholder=" " />
                <div className="cut cut-short"></div>
                <label htmlFor="email" className="form-placeholder">Email</label>
              </div>
              <div className="input-container ic2">
                <input id="password" className="log-input" type="password" placeholder=" " />
                <div className="cut cut-short1"></div>
                <label htmlFor="password" className="form-placeholder">Password</label>
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

            <div className="google-button">
              {value ? <TodoList /> :
                <button className="google-signin-btn" onClick={handleClick}>
                  <img src={googleLogo} alt="Google Icon" className="google-icon" />
                  Sign In with Google</button>

              }

            </div>

            <h5 className="tab-text">or: </h5>


            <div className="form">
              <div class="input-container ic1">
                <input id="name" class="log-input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="name" class="form-placeholder">Name</label>
              </div>

              <div class="input-container ic2">
                <input id="username" class="log-input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="username" class="form-placeholder">Username</label>
              </div>

              <div class="input-container ic2">
                <input id="email" class="log-input" type="email" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="email" class="form-placeholder">Email</label>
              </div><div class="input-container ic2">
                <input id="password" class="log-input" type="password" placeholder=" " />
                <div class="cut cut-short1"></div>
                <label for="password" class="form-placeholder">Password</label>
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