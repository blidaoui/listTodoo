import React,{ useState } from 'react'
import { Link } from "react-router-dom";
import validator from 'validator'

const Registration = ()=> {



  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }
  const renderForm = (
    <div className="form">
      <div className="title">create new account</div> 
      <form >
      <div > <input placeholder="Name" className="input-container" type="text" name="Name" required />

         </div><br></br>
         <div >  <input placeholder="Last Name" className="input-container" type="text" name="Last Name" required />
         </div><br></br>
      <div > <input placeholder="Email" className="input-container" type="text" name="mail" id="userEmail" 
        onChange={(e) => validateEmail(e)} /><br />
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>

         </div><br></br>
      <div > <input placeholder="Password" className="input-container" type="password" name="pass" requiredy />
         </div>
         <br></br>
         <div > <input placeholder="Confirm Password" className="input-container" type="password" name="pass" requiredy />
         </div>
        <div > <button  className="button-container"   > create an account</button>
        </div > 


        <label className="mt-2">
                    <p className="t">Already have an account?<Link to="/" className="link "> Sign in Here </Link>
               </p> </label> <br></br>
               <div ><Link to="/" className="link"> Home</Link>
        </div>
       </form></div> );

  return (
    <div className="app">

      {renderForm}

      </div>
  );
}
export default Registration;