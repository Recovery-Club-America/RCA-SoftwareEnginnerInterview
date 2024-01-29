import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import checkMark from '../../images/green-checkmark-icon.svg'
import xMark from '../../images/red-x-icon.svg'
import Tooltip from '@mui/material/Tooltip';
import './RegisterForm.css';

function RegisterForm() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(false);
  const [passwordUppercase, setPasswordUppercase] = useState(false);
  const [passwordSpecialChar, setPasswordSpecialChar] = useState(false);
  const [verifiedPassword, setVerifiedPassword] = useState(false);
  const [verifiedForm, setVerifiedForm] = useState(false)


  useEffect(() => {
    function passwordConditionsMet() {
      if(passwordLength && passwordUppercase && passwordSpecialChar && verifiedPassword) {
        setVerifiedForm(true);
      } else {
        setVerifiedForm(false);
      }
    }

    passwordConditionsMet();
  }, [passwordLength, passwordUppercase, passwordSpecialChar, verifiedPassword]); // Dependencies

  // Rest of your component code



  function passwordLengthChecker(value) {
    if (value.length >= 8) {
      setPasswordLength(true, 'Here tyler')
    } else {
      setPasswordLength(false)
    }
  };

  function passwordUpperCaseChecker(value) {
    if (/[A-Z]/.test(event.target.value)) {
      setPasswordUppercase(true)
    } else {
      setPasswordUppercase(false)
    }
  };

  function passwordSpecialCharChecker(value) {
    const specialChar = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    if (specialChar.test(event.target.value)) {
      setPasswordSpecialChar(true)
    } else {
      setPasswordSpecialChar(false)
    }
  };

  function passwordMatch(value) {
    if (password === event.target.value) {
      setVerifiedPassword(true)
    } else {
      setVerifiedPassword(false)
    }
  }

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password,
      },
    });

  }; // end registerUser

  return (
    <form className="text-align-center" onSubmit={registerUser}>
      <h2 className='text-purple text-center m-t-n text-blue'>Register Here!</h2>
      {errors.registrationMessage && (
        <h3 className="alert text-red" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="firstname">
          <input
            className='input-field'
            type="text"
            name="firstname"
            placeholder='First Name'
            value={firstname}
            required
            onChange={(event) => setFirstname(event.target.value)}
          />
        </label>
        <label htmlFor="lastname">
          <input
            className='input-field'
            type="text"
            name="lastname"
            placeholder='Last Name'
            value={lastname}
            required
            onChange={(event) => setLastname(event.target.value)}
          />
        </label>
        <label htmlFor="username">
          <input
            className='input-field'
            type="email"
            name="username"
            placeholder='Enter Email Address'
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      
      <div>
        <label htmlFor="password">
          <input
            className='input-field'
            type="password"
            name="password"
            placeholder='Enter Your Password'
            value={password}
            required
            onChange={(event) => {
              setPassword(event.target.value);
              passwordLengthChecker(event.target.value);
              passwordUpperCaseChecker(event.target.value);
              passwordSpecialCharChecker(event.target.value)
            }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <input
            className='input-field'
            type="password"
            name="password"
            placeholder='Confirm Your Password'
            // value={verifiedPassword}
            required
            onChange={(event) => {
              setVerifiedPassword(event.target.value);
              passwordMatch(event.target.value)
            }}
          />
        </label>
      </div>
      <div>
        <div className='text-center'>
          <p className='text-bold text-blue m-t-m m-b-m'>- Passwords Must Include -</p>
        </div>
        <div className='display-flex items-center m-b-s'
        >
          {passwordLength ? (
            <img
              className='login-icons p-r-m' src={checkMark} alt="verification"
            />
          ) : (
            <img
              className='login-icons p-r-m' src={xMark} alt="verification"
            />
          )}
          <p>Longer than 8 characters</p>
        </div>
        <div className='display-flex items-center m-b-s'>
          {passwordUppercase ? (
            <img
              className='login-icons p-r-m' src={checkMark} alt="verification"
            />
          ) : (
            <img
              className='login-icons p-r-m' src={xMark} alt="verification"
            />
          )}
          <p>Contains an uppercase character</p>
        </div>
        <div className='display-flex items-center m-b-s'>
          {passwordSpecialChar ? (
            <img
              className='login-icons p-r-m' src={checkMark} alt="verification"
            />
          ) : (
            <img
              className='login-icons p-r-m' src={xMark} alt="verification"
            />
          )}
          <p>Contains a symbol</p>
        </div>
        <div className='display-flex items-center m-b-s'
        >
          {verifiedPassword ? (
            <img
              className='login-icons p-r-m' src={checkMark} alt="verification"
            />
          ) : (
            <img
              className='login-icons p-r-m' src={xMark} alt="verification"
            />
          )}
          <p>Passwords Match</p>
        </div>
      </div>
      <div>
        <Tooltip title="Fix Errors in Registration Form" arrow>
        <input className="btn button-main button-width" type="submit" name="submit" value="Register" disabled={!verifiedForm} />
        </Tooltip>
      </div>
    </form>
  );
}

export default RegisterForm;
