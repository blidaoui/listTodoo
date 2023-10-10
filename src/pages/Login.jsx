import React, { useState } from "react";
import './Login.css'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Icon from "../component/Icon";
import { Link, useNavigate } from "react-router-dom";
import validator from 'validator'

const Login = () => {
  const navigate = useNavigate();
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";

  // React States
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('Valid Email')
    } else {
      setEmailError('Enter valid Email!')
    }
  }


  const handleSubmit = async (event) => {
    // Prevent page reload
    event.preventDefault();

    // Find user login info
    const getLoginUrl = await fetch(`http://localhost:7000/login?email=${username}&password=${pass}`)
    const userData = getLoginUrl.json();
    alert("login successful !");
    navigate("/todo");
     
    // Compare user info
    if(userData ) {
      if (userData) {
      } else {
        navigate("/todo");
      }
    }
  };



  // JSX code for login form
  const renderForm = (
    <div className="form">
      <div className="title">WELCOME</div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Email"
            className="input-container"
            type="text"
            name="mail"
            required
            onChange={(event) => {setUsername(event.target.value)}} />
         <br />
       
          
        </div>
        <br></br>
        <div>
          <input
            placeholder="Password"
            className="input-container"
            type="password"
            name="pass"
            required
            onChange={(event) => setPass(event.target.value)}
          />
         
        </div>
        <div>
          <button type="submit" className="button-container">
            Sign In
          </button>
        </div>
        <div className="LoginWith">OR Login With</div>
        <div className="HorizontalRule" />
        <div className="icon-container">
          <Icon color={FacebookBackground}>
            <a href="https://www.facebook.com/">
              <FaFacebookF />
            </a>
          </Icon>
          <Icon color={InstagramBackground}>
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
          </Icon>
          <Icon color={TwitterBackground}>
            <a href="https://www.twitter.com/">
              <FaTwitter />
            </a>
          </Icon>
        </div>
      </form>

      <label className="mt-2">
        <p className="t">
          <Link to="/Registration" className="link">
            Create Account
          </Link>
        </p>
      </label>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="icon-container"> </div>
        {renderForm}
      </div>
    </div>
  );
}

export default Login;
