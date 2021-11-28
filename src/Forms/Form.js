import React, { useState } from "react";
import "../Forms/Forms.css";

export default function Form() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value});
  }

  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value});
  }

  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div className="form-body">
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>                  
          {submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : null}
          <input
            onChange={handleFirstNameInputChange}
            value={values.firstName}
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          {submitted && !values.firstName ? <span id="first-name-error" className="form-span">Please enter a first name</span> : null}
          <input
            onChange={handleLastNameInputChange}
            value={values.lastName}
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          {submitted && !values.lastName ? <span id="last-name-error"  className="form-span">Please enter a last name</span> : null}
          <input
            onChange= {handleEmailInputChange}
            value={values.email}
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
          />
          {submitted && !values.email ? <span id="email-error"  className="form-span">Please enter an email address</span> : null}
          <button className="form-field form-button" type="submit">
            Register
          </button>
        </form>  
        <br/> 
        <div style={{background: 'silver'}}>Current Stored Values:
          <br/> First Name: <b>{values.firstName}</b>
          <br/> Last Name: <b>{values.lastName}</b>
          <br/> Email: <b>{values.email}</b>
        </div>     
      </div>      
    </div>
    
  );
}