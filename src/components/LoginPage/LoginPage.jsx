import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import bgImg from '../../images/login-bg-1.jpg'

function LoginPage() {
  const history = useHistory();

  return (
    <div style={{ 
      backgroundImage: `url(${bgImg})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <Container>
        <Grid container justifyContent={'center'}>
          <Grid item xs={12} md={8} lg={6}>
            <div className='formPanel text-align-center'>
              <LoginForm />
              <center>
                <p className='m-t-m'>If you don't already have an account register below!</p>
                <button
                  type="button"
                  className="btn btn_asLink m-t-m"
                  onClick={() => {
                    history.push('/registration');
                  }}
                >
                  Register
                </button>
              </center>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default LoginPage;

