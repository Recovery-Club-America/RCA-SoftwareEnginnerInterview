import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <>
   
      </>
  );
}

export default LandingPage;
