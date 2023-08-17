import React, { useState } from "react";
import './Login.css'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Icon from "./Icon";
import { Link } from "react-router-dom";


 
export default function Login() {

  const FacebookBackground =
  "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
const InstagramBackground =
  "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
const TwitterBackground =
  "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";


  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <div className="title">WELLCOM</div> 
      <form onSubmit={handleSubmit}>
       
          
      <div >  <input placeholder="Username" className="input-container" type="text" name="uname" required />
          {renderErrorMessage("uname")}
         </div><br></br>
       
         <div >  <input placeholder="Password" className="input-container" type="password" name="pass" requiredy />
          {renderErrorMessage("pass")}</div>
        
        
         <div > <button  className="button-container"   > Sign Up</button>
        </div>
        <div className="LoginWith" >OR Login With</div>
        <div className="HorizontalRule"  />
<div  className="icon-container"> 

<Icon color={FacebookBackground}><a href="https://www.facebook.com/">
          <FaFacebookF />
        </a></Icon>
        <Icon color={InstagramBackground}><a href="https://www.instagram.com/">
          <FaInstagram /></a>
        </Icon>
        <Icon color={TwitterBackground}><a href="https://www.twitter.com/">
          <FaTwitter /></a>
        </Icon> </div>
<div className="forgotpass">  <a href="src\UpdatePass.jsx" > Forgot Password ?</a></div>
    </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
       <div  className="icon-container"> </div>
        <div className="forgotpass" ></div>
        {isSubmitted ? <div className="message">User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}
