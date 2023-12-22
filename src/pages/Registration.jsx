import React,{ useState } from 'react'
import { Link } from "react-router-dom";
import validator from 'validator'

const Registration = ()=> {
  const [user_name, setUsername] = useState(""); 
  const [name, setName] = useState(""); 
  const [lastname, setLastname] = useState(""); 
  const [user_pass, setUserpass] = useState(""); 

  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }


  const onSubmitForm = async (event) => {
    (event).preventDefault();
    try {
      const body ={name, lastname , user_name ,user_pass };
      const postauthUrl = await fetch(`http://localhost:7000/users`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }) 
      alert("votre compte est créé avec succès !");
      window.location ="/Registration";
      

    } catch (err) {
      console.error(err.message);
    }
  };




  const renderForm = (
    <div className="form">
      <div className="title">create new account</div> 
      <form onSubmit={onSubmitForm} >
      <div > <input placeholder="Name"
       className="input-container" 
      type="text" name="Name"
      value={name}
      onChange={(event) => setName(event.target.value)}
      required />

         </div>
         <br></br>
         <div >  
          <input placeholder="Last Name" 
         className="input-container"
          type="text" name="Last Name"
          value={lastname}
          onChange={event => setLastname(event.target.value)} required />
         </div><br></br>
        <div > 
        <input placeholder="Email"
           className="input-container"
           type="text" name="mail" id="userEmail" 
           value={user_name}
           onChange={(event) => {
            validateEmail(event);
            setUsername(event.target.value);
          }}
            required/><br />
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>

         </div><br></br>
      <div >
         <input placeholder="Password" 
         className="input-container"
         type="password"
         name="pass"
         value={user_pass}
         onChange={event => setUserpass(event.target.value)} 
         requiredy />
         </div>
         <br></br>
        
        <div > <button  className="button-container"> create account</button>
        </div > 


        <label className="mt-2">
        <p className="t">Already have an account?<Link to="/" className="link "> Sign in Here </Link>
               </p> </label> <br></br>
            
    
       </form></div> );

  return (
    <div className="app">

      {renderForm}

      </div>
  );
}
export default Registration;