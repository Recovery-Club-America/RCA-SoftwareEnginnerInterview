import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
          <form className="text-align-center" onSubmit={login}>
            <h2 className='form-heading text-blue m-t-n'>Login</h2>
            <p className='m-b-m'>Hey, Enter your details to sign in to your account</p>
            {errors.loginMessage && (
              <h3 className="alert" role="alert">
                {errors.loginMessage}
              </h3>
            )}
            <div>
              <label htmlFor="username">
                <input
                  className='input-field'
                  type="text"
                  name="username"
                  placeholder='Enter Email Address'
                  required
                  value={username}
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
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>
            </div>
            <div>
              <input className="btn button-main button-width" type="submit" name="submit" value="Log In" />
            </div>
          </form>
  );
}

export default LoginForm;
